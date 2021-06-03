import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Utente } from './utente';

@Injectable({
  providedIn: 'root'
})
export class ClientHttp {
  endPoint = 'https://jsonplaceholder.typicode.com/users';

  constructor(private httpClient: HttpClient) {}

  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };


  getUsers(): Observable<Utente> {
    return this.httpClient.get<Utente>(this.endPoint).pipe(
      retry(1),
      catchError(this.httpError)
    );
  }

  httpError(error) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      // client side error
      msg = error.error.message;
    } else {
      // server side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(msg);
    return throwError(msg);
  }
}
