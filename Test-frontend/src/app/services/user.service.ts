import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../Models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:8081'; // URL de votre API

  constructor(private httpClient:HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.apiUrl+'/users/list')
  }
  AddUser(user:User) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };

    return this.httpClient.post(this.apiUrl+'/users/add',user,httpOptions)

  }
  getUserById(id:number):Observable<User> {
    return this.httpClient.get<User>(this.apiUrl+'/users/'+id)
  }

}
