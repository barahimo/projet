import { DataService } from './../services/data.service';
import { Component, OnInit } from '@angular/core';
import { GithubFollowersService } from '../services/github-followers.service';
import { AppError } from '../commont/app-error';
import { BadInput } from '../commont/bad-input';
import { NotFoundError } from '../commont/not-found-error';

@Component({
  selector: 'github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {


  followers;
  constructor(private service: GithubFollowersService) { }

  ngOnInit(): void {
    this.service.getAll()
      .subscribe(followers => {
        this.followers = followers;
        //console.log(followers);
      }, (error: AppError) => {
        this.error(error);
      });
  }

  error(error: AppError) {
    if (error instanceof BadInput)
      console.log("Merci de verifier les informations");
    else if (error instanceof NotFoundError)
      console.log("Ce contenu n'existe pas");
    else
      console.log("Erreur inattendu");
  }

  /*btnClick() {
    this.service.getAll().subscribe(follower => console.log("follower"))
  }*/

}
