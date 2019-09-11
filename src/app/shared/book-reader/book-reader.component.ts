import {Component, Input, OnInit} from '@angular/core';
import {LabelType, Options} from 'ng5-slider';

@Component({
  selector: 'app-book-reader',
  templateUrl: './book-reader.component.html',
  styleUrls: ['./book-reader.component.scss']
})
export class BookReaderComponent implements OnInit {
  @Input() text: any;
  @Input() isShowIndex: boolean;
  @Input() step: any;
  initLineHeight = 3;
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

  constructor() {
  }

  ngOnInit() {
  }

  public onFontSizeChange() {
    this.initFontSizeStr = this.initFontSize + 'px';
  }

}
