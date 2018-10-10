import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient, HttpHeaders, HttpErrorResponse } from  '@angular/common/http';

import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';


const API_URL = environment.apiUrl;
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public id: string;
  constructor(private http: HttpClient) { }

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  getPosts(): Observable<any> {
    return this.http.get(API_URL + '/news').pipe(
      map(this.extractData));
  }

  getPost(id): Observable<any> {
    return this.http.get(API_URL + '/news/' + id).pipe(
      map(this.extractData));
  }

  addPost (post): Observable<any> {
    console.log(post);
    return this.http.post<any>(API_URL + '/news', JSON.stringify(post), httpOptions).pipe(
      tap((post) => console.log(`added post w/ id=${post.id}`)),
      catchError(this.handleError<any>('addPost'))
    );
  }

  deletePost (id): Observable<any> {
    return this.http.delete<any>(API_URL + '/news/' + id, httpOptions).pipe(
      tap(_ => console.log(`deleted post id=${id}`)),
      catchError(this.handleError<any>('deleteProduct'))
    );
  }

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

}
