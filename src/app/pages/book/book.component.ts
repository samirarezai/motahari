import {Component, OnInit} from '@angular/core';
import {RestService} from '../../services/rest.service';
import {ActivatedRoute} from '@angular/router';
import {ConfigurationService} from '../../services/configuration.service';
import {BookModel} from '../../models/book-model';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  bookId: string;
  book: any;

  constructor(private restService: RestService, private route: ActivatedRoute, private configService: ConfigurationService) {
  }

  ngOnInit() {
    this.bookId = this.route.snapshot.paramMap.get('id');
    this.callService();
  }


  private callService() {
    let body = {
      bookId: this.bookId
    };
    this.restService.makeRequest(this.configService.post, 'book/info', body, false, response => {
      this.book = response.result;
    }, error => {

    });
  }

}
