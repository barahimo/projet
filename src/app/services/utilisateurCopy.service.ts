import { catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { ErrorVide } from '../commont/errorVide';
import { ErrorBad } from '../commont/errorBad';
import { ErrorGlobal } from '../commont/errorGlobal';

@Injectable({
    providedIn: 'root'
})

export class UtilisateurService {

    private url = "https://jsonplaceholder.typicode.com/users";

    private handleError(error: Response) {
        if (error.status === 400)
            return throwError(new ErrorBad);
        //return throwError("Page not found");
        if (error.status === 404)
            return throwError(new ErrorVide);
        //return throwError("Merci de verifier les informations");
        return throwError(new ErrorGlobal);
        //return throwError("error inattendu");
    }

    /*
    private users;
    private user = {
        id: 0,
        name: "",
        email: "",
    };
    private status = true;
   */

    constructor(private http: HttpClient) { }

    getUsersService() {
        return this.http.get(this.url)
            .pipe(catchError(this.handleError));
        /*
            .pipe(catchError((error: Response) => {
                if (error.status === 400)
                return throwError(new ErrorBad);
                if (error.status === 404)
                return throwError(new ErrorVide);
                return throwError(new ErrorGlobal);
            }));
        */
    }

    createUserService(ressource) {
        return this.http.post(this.url, ressource);
    }

    updateUserService(ressource) {
        return this.http.put(this.url + '/' + ressource.id, ressource);
    }

    deleteUserService(user) {
        return this.http.delete(this.url + '/' + user.id)
            .pipe(catchError(this.handleError));
    }
}