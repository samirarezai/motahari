import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-my-audio-book-box',
  templateUrl: './my-audio-book-box.component.html',
  styleUrls: ['./my-audio-book-box.component.scss']
})
export class MyAudioBookBoxComponent implements OnInit {
  @Input() book: any;
  constructor() { }

  ngOnInit() {
  }

}
