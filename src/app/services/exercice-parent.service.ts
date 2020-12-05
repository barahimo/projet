import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ExerciceParentService {


  constructor(@Inject('url') private url: string) { }

  parent = "This is parent";

  getMessage() {
    let msg = "this is message";
    return msg;
  }

  getMsg() {
    console.error("this is my url : " + this.url)
  }

  getTest(msg: any) {
    console.log("this is my msg : " + msg)
  }
}
