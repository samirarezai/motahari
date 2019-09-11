import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-book-box',
  templateUrl: './book-box.component.html',
  styleUrls: ['./book-box.component.scss']
})
export class BookBoxComponent implements OnInit {
  @Input() book: any;

  constructor() {
  }

  ngOnInit() {
  }

}
