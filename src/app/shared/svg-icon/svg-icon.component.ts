import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-svg-icon',
  template: `
    <svg>
      // SVG elements don't have properties, therefore attribute binding is needed
      // https://stackoverflow.com/a/35082700
      <use attr.xlink:href="assets/symbol-defs.svg#{{icon}}"></use>
    </svg>
  `,
  styleUrls: ['./svg-icon.component.scss']
})
export class SvgIconComponent implements OnInit {

  @Input() icon: string;

  constructor() {
  }

  ngOnInit() {
  }

}
