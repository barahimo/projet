import { Component } from '@angular/core';
import { Plugins } from 'protractor/built/plugins';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  viewCourse = "aaa";
  courses;
  trackCourses(index, course) {
    return course ? course.id : undefined;
  }
  loadCourses() {
    this.courses = [
      { id: 1, title: "Laravel" },
      { id: 2, title: "Angular" },
      { id: 3, title: "VusJS" },
      { id: 4, title: "Symphonie" },
      { id: 5, title: "AdonisJs" },
    ];
  }

  addCourse() {
    this.courses.push({ id: 6, title: "React" });
  }
  removeCourse(course) {
    let index = this.courses.indexOf(course);
    this.courses.splice(index, 1)
  }
  updateCourse(course) {
    course.title = "updated";
  }
  /********************/
  post = {
    title: "dhina ibrahim",
    status: false,
  }
  onStatusChange(args) {
    console.log("Status Changed : ", args.newStat, args.name);
  }
  title = 'projet-angular';
  body = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit veniam magni rem earum officiis repudiandae, voluptate aspernatur fugit neque ipsum quam id laborum nostrum perspiciatis veritatis molestiae? Excepturi pariatur praesentium quidem aut possimus accusamus repellendus fugiat commodi, quia quibusdam dolores eveniet deleniti numquam accusantium aperiam neque, illum recusandae dolorum corrupti? Eveniet quo tempora maiores! Ullam quidem quod natus voluptates blanditiis accusantium iusto culpa animi harum nam fugiat nostrum commodi, quia et excepturi rerum consequuntur quae tenetur distinctio cupiditate iure doloremque dolor. Facere, omnis veritatis. Facilis dolorum, id fuga dolores provident ut et ea recusandae dolor suscipit. Dolores voluptatem ducimus eius!";
  on: string = "data:image/jpeg;base64,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";
  off: string = "https://plusbelleslesmaths.com/wp-content/uploads/2012/11/ampoule.jpg";
  lampe: string = "on";
  image: string = this.off;
  onClickImage() {
    if (this.lampe == "on") {
      this.image = this.on
      this.lampe = "off"
    }
    else {
      this.image = this.off;
      this.lampe = "on"
    }
    console.log("Image Clicked");
  }

}
