import { Component, Input } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
    selector: 'courses',
    template: `
        <div class="container">
            <ul class="list-group">
                <li class="list-group-item">Title : {{course.titre | lowercase | uppercase}}</li>
                <li class="list-group-item">Ratting : {{course.avis | number:'2.1-1'}}</li>
                <li class="list-group-item">Students : {{course.participants}}</li>
                <li class="list-group-item">Price : {{course.prix | currency:'EUR':'symbol':'3.1-1'}}</li>
                <li class="list-group-item">releaseDate : {{course.publicationDate | date:'yyyy-MM-dd'}}</li>
            </ul>
        </div>
        <!--
        <h1 [style.color]="isActive ? 'blue': 'red'">{{title}}</h1>
        <div (click)="onClickDiv()">
        <button (click)="onClick($event)" class="btn btn-primary">Cliquer</button>
        </div>
        <input type="text" [(ngModel)]="email" (keyup.enter)="onKeyUp()">
        <p>{{email}}</p>
        -->
    `,
})

export class CoursesComponent {
    course = {
        titre: 'Formation Complète Sur Angular',
        avis: '4.9762',
        participants: 136,
        prix: 950.38,
        publicationDate: new Date(2017, 11, 21),
    }
    isActive = true;
    title = "La liste des cours";
    courses;
    onClick($event) {
        $event.stopPropagation();
        console.log("Boutton clicked", $event);
    }
    onClickDiv() {
        console.log("Div is clicked");
    }
    email: string = "barahimo@gmail.com";
    onKeyUp() {
        console.log(this.email);
    }
    constructor(coursesService: CoursesService) {
        this.courses = coursesService.getCourses();
    }
    getTitle() {
        return this.title;
    }
}