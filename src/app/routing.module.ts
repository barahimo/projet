//Modules
import { NgModule } from '@angular/core';
//Routes
import { RouterModule, Routes } from '@angular/router';
//Components
import { HomeComponent } from './home/home.component';
import { GithubFollowersComponent } from './github-followers/github-followers.component';
import { ProfileFollowersComponent } from './profile-followers/profile-followers.component';
import { PostsComponent } from './posts/posts.component';
import { UtilisateursComponent } from './utilisateurs/utilisateurs.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "posts",
    component: PostsComponent
  },
  {
    path: "users",
    component: UtilisateursComponent
  },
  {
    path: "followers",
    component: GithubFollowersComponent
  },
  {
    path: "followers/:id/:username",
    component: ProfileFollowersComponent
  }
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
})
export class RoutingModule { }
