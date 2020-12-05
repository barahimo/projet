import { BadInput } from './../commont/bad-input';
import { NotFoundError } from './../commont/not-found-error';
import { AppError } from './../commont/app-error';
import { PostService } from './../services/post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts;
  status = true;

  //post = this.postService.post;
  post = {
    id: 0,
    title: '',
    body: '',
    userId: '',
  };

  constructor(private postService: PostService) {
    //Ne pas optimisée
  }
  ngOnInit(): void {
    this.getPosts();
  }

  //Method get Data 
  getPosts() {
    this.postService.getAll()
      .subscribe(
        posts => this.posts = posts
        , error => alert("erreur inattendu")
      )
  }

  //Method Add Data 
  createPost() {
    this.postService.create(this.post)
      .subscribe(newPost => {
        console.log(newPost);
        //this.post.id = newPost.id;
        this.posts.unshift(newPost);
        //this.post = this.postService.post;
        this.post = {
          id: 0,
          title: '',
          body: '',
          userId: '',
        };
      }, error => {
        console.log(error);
      }
        /*, (error: AppError) => {
          if (error instanceof BadInput)
            alert("Merci de verifier vos informations !!");
          else
            alert("erreur inattendu");
          console.log(error);
        }*/
      );
  }

  //Method Edit Data 
  editPost(post) {
    this.post = post;
    this.status = false;
  }

  //Method Update Data 
  updatePost() {
    this.postService.update(this.post)
      .subscribe(() => {
        //this.post = this.postService.post;
        this.post = {
          id: 0,
          title: '',
          body: '',
          userId: '',
        };
        this.status = true;
      }, (error: Response) => {
        if (error.status === 400)
          alert("Merci de verifier vos informations !!");
        else
          alert("erreur inattendu");
        console.log(error);
      }
      );
  }

  //Delete Data
  deletePost(post) {
    this.postService.delete(post)
      .subscribe(() => {
        let index = this.posts.indexOf(post);
        //this.posts.splice(123, 1);
        console.log("ID : " + post.id);
        console.log("index : " + index);
      }, error => {
        console.log(error);
      }
        /*, (error: AppError) => {
          if (error instanceof NotFoundError)
            alert("Ce post est déja supprimé !!");
          else
            alert("erreur inattendu");
          console.log(error);
        }
      );*/
      );
  }
}
