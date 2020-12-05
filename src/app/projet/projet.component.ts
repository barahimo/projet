import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-projet',
  templateUrl: './projet.component.html',
  styleUrls: ['./projet.component.css']
})
export class ProjetComponent implements OnInit {
  source = "Voila mon texte";
  body = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit veniam magni rem earum officiis repudiandae, voluptate aspernatur fugit neque ipsum quam id laborum nostrum perspiciatis veritatis molestiae? Excepturi pariatur praesentium quidem aut possimus accusamus repellendus fugiat commodi, quia quibusdam dolores eveniet deleniti numquam accusantium aperiam neque, illum recusandae dolorum corrupti? Eveniet quo tempora maiores! Ullam quidem quod natus voluptates blanditiis accusantium iusto culpa animi harum nam fugiat nostrum commodi, quia et excepturi rerum consequuntur quae tenetur distinctio cupiditate iure doloremque dolor. Facere, omnis veritatis. Facilis dolorum, id fuga dolores provident ut et ea recusandae dolor suscipit. Dolores voluptatem ducimus eius!";
  @Input() name;
  constructor() { }

  ngOnInit(): void {
  }
  load(param) {
    console.log(param.value);
  }
  email0 = "barahimo0@gmail.com"
  email1 = "barahimo1@gmail.com"
  email2 = "barahimo2@gmail.com"
  onKeyUp0(param0) {
    console.log(param0, this.email0);
  }
  onKeyUp1(param1) {
    console.log(param1.value);
  }
  onKeyUp2(param2) {
    console.log(param2);
  }

}
