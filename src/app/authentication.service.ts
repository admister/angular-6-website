import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { User } from './user';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private apiurl = 'api/users';
  private isloggedIn: boolean;

  constructor(private http: HttpClient, private router: Router) { }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  signup(data): Observable<User> {
    return this.http.post<User>(`${this.apiurl}/signup/`, data).pipe(
      tap((user: User) => {
        // localStorage.setItem('currentUser', JSON.stringify(user));
        console.log(`added user w/ id=${user.id}`);
      }),
      catchError(this.handleError<User>('signup'))
    );
  }

  login(data): Observable<User> {
    return this.http.post<any>(`${this.apiurl}/login/`, data).pipe(
      tap((user: User) => {
        if ( user && user.token ) {
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.isloggedIn = true;
        }
        console.log(`logged in with user w/ id=${user.id}`);
      }),
      catchError(this.handleError<User>('login'))
    );
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.isloggedIn = false;
    this.router.navigate(['/login']);
  }

  isLogged() {
    return this.isloggedIn;
  }
}
