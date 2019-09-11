import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-top-background',
  templateUrl: './top-background.component.html',
  styleUrls: ['./top-background.component.scss']
})
export class TopBackgroundComponent implements OnInit {
  @Input() isSmall: boolean;

  constructor() {
  }

  ngOnInit() {
  }

}
