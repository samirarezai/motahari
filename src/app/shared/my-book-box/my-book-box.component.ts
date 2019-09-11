import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-my-book-box',
  templateUrl: './my-book-box.component.html',
  styleUrls: ['./my-book-box.component.scss']
})
export class MyBookBoxComponent implements OnInit {
  @Input() book: any;
  constructor() { }

  ngOnInit() {
  }

}
