import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Signup } from './signup';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient,) { }

  apiUrl = 'http://localhost:3000/signup';

  postdetails(body: Signup): Observable<Signup> {
    return this.http.post<Signup>(this.apiUrl, body)
  }

  getdetails(): Observable<Signup> {
    return this.http.get<Signup>(this.apiUrl);
  }

  deleteDetails(id: number): Observable<Signup> {
    return this.http.delete<Signup>(this.apiUrl + '/' + id)
  }

  getdetailByID(id: number):Observable<Signup> {
    return this.http.get<Signup>(this.apiUrl + '/' + id)
  }

  putDetails(id: number, body: Signup): Observable<Signup> {
    return this.http.put<Signup>(this.apiUrl+'/'+id , body)
  }
}

