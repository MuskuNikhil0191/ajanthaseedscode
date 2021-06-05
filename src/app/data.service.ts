import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  users:any=[]

  constructor(private http:HttpClient) { }

  getusers():Observable<any>{
    return this.http.get("http://localhost:3000/getusers");
  }
  createuser(user:any):Observable<any>{
    return this.http.post<any>("http://localhost:3000/createuser",user);
  }
  getuser(user:any):Observable<any>{
    return this.http.get(`http://localhost:3000/getuser/${user.email}/${user.password}`);
  }
  updatepwdfd(user:any):Observable<any>{
    return this.http.put(`http://localhost:3000/updatepwd`,user);
  }
  telugu=false;
  english=true;
  home=true;
}
