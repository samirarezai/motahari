import {Component, OnInit} from '@angular/core';
import {ConfigurationService} from '../../services/configuration.service';
import {RestService} from '../../services/rest.service';
import {ActivatedRoute, Router} from '@angular/router';
import {init} from 'protractor/built/launcher';

@Component({
  selector: 'app-advance-search',
  templateUrl: './advance-search.component.html',
  styleUrls: ['./advance-search.component.scss']
})
export class AdvanceSearchComponent implements OnInit {
  config;
  bookList: any;
  selectData;
  isSameWord = true;
  tabIndex = 0;
  limitBook: any;
  searchText;
  mainOffset = 0;
  mainSize = 1000;
  offset = 0;
  size = 20;
  isSearch = false;
  titleSearchResultLis: any = [];
  indexSearchResultList: any = [];
  textSearchResultList: any = [];
  initTextSearchResultList: any;
  titleSearchCount = 0;
  indexSearchCount = 0;
  pageSearchCount = 0;
  throttle = 1150;
  scrollDistance = 0;
  callFirst;
  isPageLoading = false;
  isIndexLoading = false;
  isTitleLoading = false;

  constructor(private configService: ConfigurationService,
              private restService: RestService,
              private router: Router,
              private route: ActivatedRoute) {
    this.callBookService();
  }


  callBookService() {
    this.restService.makeRequest(this.configService.post, 'book/title/list', {}, false, response => {
      this.bookList = response.result;
      this.config.limitTo = this.bookList.length;
      let initBookIds = this.route.snapshot.queryParamMap.getAll('bookId');
      if (initBookIds !== null && initBookIds.length !== 0) {
        this.selectData = [];
        for (const book of this.bookList) {
          for (const select of initBookIds) {
            if (book.id === Number(select)) {
              this.selectData.push(book);
            }
          }
        }
      }
    });
  }

  ngOnInit() {
    let initSearchText = this.route.snapshot.queryParamMap.get('searchText');
    let initSameWord = this.route.snapshot.queryParamMap.get('isSameWord');
    let initBookIds = this.route.snapshot.queryParamMap.getAll('bookId');
    let isForceSearch = false;
    if (initSearchText !== null) {
      this.searchText = initSearchText;
      isForceSearch = true;
    }
    if (initSameWord !== null) {
      this.isSameWord = initSameWord.toLowerCase() === 'true';
    }
    if (initBookIds !== null && initBookIds.length !== 0) {
      let value = [];
      for (const item of initBookIds) {
        value.push({id: Number(item)});
      }
      this.limitBook = {value};
    }
    this.config = {
      displayKey: 'title',
      search: false,
      height: '200px',
      placeholder: 'همه',
      customComparator: undefined,
      moreText: 'بیشتر',
      noResultsFound: 'نتیجه‌ای پیدا نشد',
      searchPlaceholder: 'جستجو',
      searchOnKey: 'title'
    };
    if (isForceSearch) {
      this.onSearchClick();
    }
  }

  selectionChanged(item) {
    this.limitBook = item;
  }

  searchCallService(searchDomain, offset, size, isScroll) {
    if (this.searchText !== undefined && this.searchText !== null && this.searchText.length >= 2) {
      if (searchDomain === 'TEXT') {
        this.isPageLoading = true;
      }
      if (searchDomain === 'INDEX') {
        this.isIndexLoading = true;
      }
      if (searchDomain === 'TITLE') {
        this.isTitleLoading = true;
      }
      let body = {
        offset: offset,
        size: size,
        searchDomain: searchDomain,
        searchFilter: '',
        bookIds: [],
        text: this.searchText
      };
      if (this.isSameWord === true) {
        body.searchFilter = 'ALL';
      } else {
        body.searchFilter = 'AND';
      }
      if (this.limitBook !== null && this.limitBook !== undefined && this.limitBook.value.length > 0) {
        for (let i = 0; i < this.limitBook.value.length; i++) {
          body.bookIds.push(this.limitBook.value[i].id);
        }
      }
      this.router.navigate(['.'], {
        relativeTo: this.route,
        queryParams: {
          'searchText': this.searchText,
          'isSameWord': this.isSameWord,
          'bookId': body.bookIds
        }
      });
      this.restService.makeRequest(this.configService.post, 'search/advance', body, false, response => {

        if (searchDomain === 'TITLE') {
          this.titleSearchResultLis = [];
          this.titleSearchResultLis = response.result.searchResponse;
          this.titleSearchCount = response.result.bookCount;
          this.isTitleLoading = false;
        }
        if (searchDomain === 'INDEX') {
          this.indexSearchResultList = [];
          this.indexSearchResultList = response.result.searchResponse;
          this.indexSearchCount = response.result.bookIndexCount;
          this.isIndexLoading = false;
        }
        if (searchDomain === 'TEXT') {
          if (!isScroll) {
            this.textSearchResultList = [];
          }
          // this.initTextSearchResultList = [];
          this.initTextSearchResultList = response.result.searchResponse;
          this.pageSearchCount = response.result.bookPageCount;
          this.addItems();
          this.callFirst = false;
          this.isPageLoading = false;
          // this.textSearchResultList = response.result;
        }
        this.isSearch = true;
      }, error => {
      });
    }
  }

  onSearchClick() {
    this.offset = 0;
    this.searchCallService('INDEX', this.mainOffset, this.mainSize, false);
    this.searchCallService('TEXT', this.offset, this.size, false);
    this.searchCallService('TITLE', this.mainOffset, this.mainSize, false);
  }

  onTabClick(tabIndex) {
    this.tabIndex = tabIndex;
  }

  onScrollTextTab() {
    if (this.tabIndex === 0 && this.initTextSearchResultList.length !== 0 && this.callFirst === false) {
      this.callFirst = true;
      this.offset = this.size + this.offset;
      this.searchCallService('TEXT', this.offset, this.size, true);
    }
  }

  addItems() {
    for (let i = 0; i < this.initTextSearchResultList.length; i++) {
      let item = this.initTextSearchResultList[i];
      let index = this.textSearchResultList.findIndex(x => x.bookPage.id === item.bookPage.id);
      if (index < 0) {
        this.textSearchResultList.push(this.initTextSearchResultList[i]);
      }
    }
  }
}
