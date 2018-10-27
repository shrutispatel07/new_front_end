import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private login:string="http://localhost:3000/user/";
  private signup:string="http://localhost:3000/signup/";
  constructor(private _http:HttpClient) { }

  LogIn(item)
  {
    let body=JSON.stringify(item);
    let head=new HttpHeaders().set('Content-Type','application/json');
   return this._http.post(this.login,body,{headers:head});
  }

  getAllUsers()
  {
    return this._http.get(this.login);
  }

  updateUser(item)
  {
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.put(this.login+item.email_id,body,{headers:head1});
  }

  deleteUser(item)
  {
    let head=new HttpHeaders().set('Content-Type','application/json');
    return this._http.delete(this.login+item.email_id,{headers:head});
  }

  getUserbyId(id)
  {
    return this._http.get(this.signup+id);
  }

  addUser(item)
  {
    let body=JSON.stringify(item);
    let head=new HttpHeaders().set('Content-Type','application/json');
   return this._http.post(this.signup,body,{headers:head});
  }

  updatepass(item){
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.put(this.signup,body,{headers:head1})
  }
}
