import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  //inputs: ['status'],
})


export class SearchComponent implements OnInit {
  //status: boolean = true;
  @Input('stat') status: boolean = true;
  @Output('ch') change = new EventEmitter();
  onClickIcone() {
    this.status = !this.status;
    this.change.emit({ newStat: this.status, name: "ibrahim" });
  }

  constructor() { }
  ngOnInit(): void {
  }
}
