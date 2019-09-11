import {Component, EventEmitter, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {RestService} from '../../services/rest.service';
import {ConfigurationService} from '../../services/configuration.service';
import {LabelType, Options} from 'ng5-slider';

@Component({
  selector: 'app-book-page',
  templateUrl: './book-page.component.html',
  styleUrls: ['./book-page.component.scss']
})
export class BookPageComponent implements OnInit, OnDestroy {

  title: string;
  bookId: string;
  bookPages: any;
  sub: any;
  bookIndexList: any;
  page: string;
  bookPage: any;
  initLineHeight = 3;
  customPageNumber;
  lineHeightOptions: Options = {
    floor: 1,
    ceil: 5,
    step: 1,
  };
  initFontSizeStr = '14px';
  initFontSize = 14;
  fontSizeOptions: Options = {
    floor: 12,
    step: 2,
    ceil: 20,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return value + 'px';
        case LabelType.High:
          return value + 'px';
        default:
          return value + 'px';
      }
    }
  };
  selectFont = 3;

  constructor(private route: ActivatedRoute, private router: Router,
              private restService: RestService, private configService: ConfigurationService) {
  }

  ngOnInit() {
    this.sub = this.route.paramMap.subscribe(params => {
      this.title = params.get('title');
      this.bookId = params.get('bookId');
      this.callService();
    });
    this.page = this.route.snapshot.queryParamMap.get('page');
    this.bookIndexCallService();
  }

  private callService() {
    let body = {
      bookId: this.bookId
    };
    this.restService.makeRequest(this.configService.post, 'book/pages', body, false, response => {
      this.bookPages = response.result;
      this.showCurrentPage();
    }, error => {
    });
  }

  private bookIndexCallService() {
    let body = {
      bookId: this.bookId
    };
    this.restService.makeRequest(this.configService.post, 'book/index', body, false, response => {
      this.bookIndexList = response.result;
    });
  }

  public showCurrentPage() {
    this.bookPage = this.bookPages[Number(this.page) - 1];
  }

  public pageChanged($event) {
    this.page = $event;
    this.router.navigate(['.'], {relativeTo: this.route, queryParams: {'page': this.page}});
  }

  public onFontSizeChange() {
    this.initFontSizeStr = this.initFontSize + 'px';
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  onTitleClicked(item) {
    this.page = item.page;
    this.router.navigate(['.'], {relativeTo: this.route, queryParams: {'page': item.page}});
  }

  goToPage() {
    if (this.customPageNumber !== 0 && this.customPageNumber !== null && this.customPageNumber !== undefined) {
      this.page = this.customPageNumber;
      this.router.navigate(['.'], {relativeTo: this.route, queryParams: {'page': this.customPageNumber}});
    }
  }

}
