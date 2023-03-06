import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUser } from '../interfaces/user';
import { IPost } from '../interfaces/post';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}
  getUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
  }
  getAUser(id: number): Observable<IUser> {
    return this.http.get<IUser>(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
  }
  getAUserPosts(): Observable<IPost[]> {
    return this.http.get<IPost[]>(`https://jsonplaceholder.typicode.com/posts`);
  }
}
