import { Component, OnInit } from '@angular/core';
import { ExerciceService } from '../services/exercice.service';

@Component({
  selector: 'app-exercice',
  templateUrl: './exercice.component.html',
  styleUrls: ['./exercice.component.css']
})
export class ExerciceComponent implements OnInit {

  //private url2 = this.exerciceService.url1;

  constructor(private exerciceService: ExerciceService) {
    //console.error("this is test");
    this.exerciceService.getTest("teest");
    this.exerciceService.getMsg();
  }

  ngOnInit(): void {
  }

  service = this.exerciceService.getMessage();

  param = "";

  get() {
    this.param = this.exerciceService.getMessage();
    console.warn(this.param);
  }

  parent = this.exerciceService.parent;

  // child = this.exerciceService.getMsg();

}
