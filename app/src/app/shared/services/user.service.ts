import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  urlBase:string="http://localhost:3000/user/"
  constructor(private http:HttpClient) { }
  login(data:any){
    return this.http.post(this.urlBase+'login',data)
  }
  logOut(data:any){
    return this.http.post(this.urlBase+'logout',data)
  }
  register(data:any){
    return this.http.post(this.urlBase+'register',data)
  }
}
