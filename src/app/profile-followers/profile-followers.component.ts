import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-profile-followers',
  templateUrl: './profile-followers.component.html',
  styleUrls: ['./profile-followers.component.css']
})
export class ProfileFollowersComponent implements OnInit {

  //constructor() { }
  constructor(private route: ActivatedRoute, private link: Router) { }
  id: number;
  username: string;
  type: string;
  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.username = this.route.snapshot.paramMap.get('username');
    this.type = this.route.snapshot.queryParamMap.get('type');
    /*this.route.paramMap.subscribe(params => {
      //this.id = parseInt(params.get('username'));
      this.id = +params.get('id');
      this.username = params.get('username');
      console.log(params.keys);
    });

    this.route.queryParamMap.subscribe(queryParams => {
      this.type = queryParams.get('type');
      console.log(queryParams.get('type'));
    });*/
  }

  retour() {
    this.link.navigate(['followers'])
  }
}
