import { catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { ErrorVide } from '../commont/errorVide';
import { ErrorBad } from '../commont/errorBad';
import { ErrorGlobal } from '../commont/errorGlobal';

@Injectable({
    providedIn: 'root'
})

export class UtilisateurGlobal {

    constructor(@Inject(String) private url: string, private http: HttpClient) { }

    private handleError(error: Response) {
        if (error.status === 400)
            return throwError(new ErrorBad);
        if (error.status === 404)
            return throwError(new ErrorVide);
        return throwError(new ErrorGlobal);
    }


    getUsersService() {
        return this.http.get(this.url)
            .pipe(catchError(this.handleError));
    }

    createUserService(ressource) {
        return this.http.post(this.url, ressource);
    }

    updateUserService(ressource) {
        return this.http.put(this.url + '/' + ressource.id, ressource);
    }

    deleteUserService(ressource) {
        return this.http.delete(this.url + '/' + ressource.id)
            .pipe(catchError(this.handleError));
    }
}