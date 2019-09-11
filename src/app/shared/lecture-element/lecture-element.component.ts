import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-lecture-element',
  templateUrl: './lecture-element.component.html',
  styleUrls: ['./lecture-element.component.scss']
})
export class LectureElementComponent implements OnInit {
  @Input() lecture: any;
  @Output() downloadClick = new EventEmitter<any>();

  constructor() {

  }

  ngOnInit() {
  }

  addToDownloadHistory(lecture) {
    this.downloadClick.emit(lecture);
  }

}
