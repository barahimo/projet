import { BadInput } from './../commont/bad-input';
import { NotFoundError } from './../commont/not-found-error';
import { AppError } from './../commont/app-error';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs'


@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor(@Inject(String) private url: string, private http: HttpClient) { }

  private handleError(error: Response) {
    if (error.status === 404)
      return throwError(new BadInput);
    if (error.status === 404)
      return throwError(new NotFoundError);
    return throwError(new AppError);
  }

  handleErro(error) {
    return throwError(error.message || "Server Error")
  }

  //Method Get Data 
  getAll() {
    return this.http.get(this.url);
  }

  create(ressource): Observable<any> {
    return this.http.post<any>(this.url, ressource)
      //.map(response => response.json())
      .pipe(catchError(this.handleError));
  }
  //Method Add Data 
  /*createPost(post) {
    return this.http.post(this.url, post)
      .catch((error: Response) => {
        if (error.status === 404) {
          return Observable.throw(new BadInput);
        }
        return Observable.throw(new AppError);
      });
  }*/

  //Method Update Data 
  update(ressource) {
    return this.http.put(this.url + "/" + ressource.id, ressource);
  }

  delete(ressource): Observable<any> {
    return this.http.delete<any>(this.url + "/" + ressource.id)
      .pipe(catchError(this.handleError));
  }

  //Method Delete Data 
  /*deletePost(post) {
    return this.http.delete(this.url + post.id)
      .catch((error: Response) => {
        if (error.status === 404) {
          return Observable.throw(new NotFoundError);
        }
        return Observable.throw(new AppError);
      });
  }*/

}
