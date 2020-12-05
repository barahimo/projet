import { UtilisateurGlobal } from './utilisateurGlobal.service';
import { catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
    providedIn: 'root'
})


export class UtilisateurService extends UtilisateurGlobal {

    constructor(http: HttpClient) {
        super("https://jsonplaceholder.typicode.com/users", http);
    }
}
