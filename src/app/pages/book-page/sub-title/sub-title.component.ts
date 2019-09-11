import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {style, state, animate, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-sub-title',
  templateUrl: './sub-title.component.html',
  styleUrls: ['./sub-title.component.scss']
})
export class SubTitleComponent implements OnInit {
  hasChildren: boolean;
  areChildrenOpen = false;
  @Input() hasParent: boolean;
  @Input() item: any;
  @Output() toggleClicked = new EventEmitter();
  @Output() titleClicked = new EventEmitter<any>();
  @Output() subTitleClicked = new EventEmitter<any>();

  constructor() {

  }

  ngOnInit() {
    this.hasChildren = this.item.subTitles ? this.item.subTitles.length > 0 : false;
  }

  toggleParent() {
    this.toggleClicked.emit(true);
  }

  toggleChildren() {
    this.areChildrenOpen = !this.areChildrenOpen;
  }

  onTitleClick(item) {
    this.titleClicked.emit(item);
  }

}
