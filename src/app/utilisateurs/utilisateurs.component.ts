import { UtilisateurService } from './../services/utilisateurs.service';
import { catchError } from 'rxjs/operators';
import { Console } from 'console';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { error } from 'protractor';
import { ErrorGlobal } from '../commont/errorGlobal';
import { ErrorVide } from '../commont/errorVide';

@Component({
  selector: 'utilisateurs',
  templateUrl: './utilisateurs.component.html',
  styleUrls: ['./utilisateurs.component.css']
})
export class UtilisateursComponent implements OnInit {

  private userss = [
    {
      id: "1",
      name: "nom1",
      email: "email1@mail.com",
    },
    {
      id: "2",
      name: "nom2",
      email: "email2@mail.com",
    }
  ];

  users;

  user = {
    id: 0,
    name: "",
    email: "",
  };

  status = true;

  //private url = "https://jsonplaceholder.typicode.com/users";
  //constructor(private http: HttpClient) { }
  constructor(private utilisateurService: UtilisateurService) { }

  ngOnInit(): void {
    this.getUsers();
    //this.utilisateurService.getMessage1();
    //this.utilisateurService.getMessage2();
  }

  getUsers() {
    /*
    this.http.get(this.url)
    */
    this.utilisateurService.getUsersService()
      .subscribe(
        users => this.users = users
        , (error: ErrorGlobal) => this.getError(error)
      );
  }

  createUser() {
    /*
    this.http.post(this.url, this.user)
    */
    this.utilisateurService.createUserService(this.user)
      .subscribe(newUser => {
        this.users.unshift(newUser);
        this.user = {
          id: 0,
          name: "",
          email: "",
        };
      });
  }

  editUser(user) {
    this.user = user;
    this.status = false;
  }

  updateUser() {
    /*
    this.http.put(this.url + '/' + this.user.id, this.user)
    */
    this.utilisateurService.updateUserService(this.user)
      .subscribe(() => {
        this.status = true;
        this.user = {
          id: 0,
          name: "",
          email: "",
        };
      });
  }

  deleteUser(user) {
    /*
    this.http.delete(this.url + '/' + user.id)
    */
    this.utilisateurService.deleteUserService(user)
      .subscribe(() => {
        let index = this.users.indexOf(user);
        this.users.splice(index, 1);
        console.log(index);
      }, (error: ErrorGlobal) => this.getError(error));
  }

  getError(error: ErrorGlobal) {
    if (error instanceof ErrorVide)
      console.log("Page not Found");
    else
      console.log("Erreur inattendu");
    console.log(error);
  };
}
