import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  constructor() {}

  @Input() list: any[];
  @Input() properties: string;
  @Output() onRemoveClick = new EventEmitter<any>();
  @Output() onUpdateClick = new EventEmitter<any>();

  _properties: string[];

  ngOnInit() {
    this._properties = this.properties.split(',');
  }

  _onRemoveClick(item: any, index: number) {
    this.onRemoveClick.emit(item);
  }

  _onUpdateClick(item) {
    this.onUpdateClick.emit(item);
  }
}
