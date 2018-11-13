import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { flyer } from '../app/manageflyer/flyer';

@Injectable({
  providedIn: 'root'
})
export class FlyerService {
  flyer:string="http://localhost:3000/flyer/";
  flyerbyid:string="http://localhost:3000/flyerbyid/";
  joinflyer:string="http://localhost:3000/joinflyer/";
  constructor(private _http:HttpClient) { }

  getAllFlyer()
  {
    return this._http.get(this.flyer);
  }


  addFlyer(item)
  {
    let body=JSON.stringify(item);
    let head=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.flyer,body,{headers:head});
  }

  updateFlyer(item:flyer)
  {
    let body=JSON.stringify(item);
    let head=new HttpHeaders().set('Content-Type','application/json');
    return this._http.put(this.flyer+item.id,body,{headers:head});
  }

  delFlyer(item)
  {
    let head=new HttpHeaders().set('Content-Type','application/json');
    return this._http.delete(this.flyer+item.id,{headers:head});
  }

  getFlyerByUserId(id:string)
  {
    return this._http.get(this.joinflyer+id);
  }
  getFlyerById(id:number)
  {
    return this._http.get(this.flyerbyid+id);
  }
}
