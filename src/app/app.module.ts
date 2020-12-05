import { NgModule } from '@angular/core';
import { InputFormatDirective } from './input-format.directive';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RoutingModule } from './routing.module';
import { RouterModule, Routes } from '@angular/router';

//Pipes
import { ResumePipe } from './resume.pipe';
//Services
import { EmailService } from './email.service';
import { CoursesService } from './courses.service';
import { PostService } from './services/post.service';
import { UtilisateurService } from './services/utilisateurs.service';
import { GithubFollowersService } from './services/github-followers.service';
import { DataService } from './services/data.service';
import { UtilisateurGlobal } from './services/utilisateurGlobal.service';
//Components
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';
import { SearchComponent } from './search/search.component';
import { PanelComponent } from './panel/panel.component';
import { ProjetComponent } from './projet/projet.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { PostsComponent } from './posts/posts.component';
import { GithubFollowersComponent } from './github-followers/github-followers.component';
import { UtilisateursComponent } from './utilisateurs/utilisateurs.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ProfileFollowersComponent } from './profile-followers/profile-followers.component';
import { ExerciceComponent } from './exercice/exercice.component';


@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    ResumePipe,
    SearchComponent,
    PanelComponent,
    ProjetComponent,
    InputFormatDirective,
    ContactFormComponent,
    SignupFormComponent,
    PostsComponent,
    GithubFollowersComponent,
    UtilisateursComponent,
    NavbarComponent,
    ExerciceComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    //RouterModule.forRoot(routes),
    RoutingModule,
  ],
  providers: [
    CoursesService,
    EmailService,
    //PostService,
    //UtilisateurService,
    //GithubFollowersService,
    //DataService,
    //UtilisateurGlobal,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
