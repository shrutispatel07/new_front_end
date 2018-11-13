import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { tycard } from '../app/managetycard/tycard';

@Injectable({
  providedIn: 'root'
})
export class TycardService {
  tycard:string="http://localhost:3000/tycard/";
  tycardbyid:string="http://localhost:3000/tycardbyid/";
  jointycard:string="http://localhost:3000/jointycard/";
  constructor(private _http:HttpClient) { }

  getAllTycard()
  {
    return this._http.get(this.tycard);
  }


  addTycard(item)
  {
    let body=JSON.stringify(item);
    let head=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.tycard,body,{headers:head});
  }

  updateTycard(item:tycard)
  {
    let body=JSON.stringify(item);
    let head=new HttpHeaders().set('Content-Type','application/json');
    return this._http.put(this.tycard+item.id,body,{headers:head});
  }

  delTycard(item)
  {
    let head=new HttpHeaders().set('Content-Type','application/json');
    return this._http.delete(this.tycard+item.id,{headers:head});
  }

  getTycardByUserId(id:string)
  {
    return this._http.get(this.jointycard+id);
  }
  getTycardById(id:number)
  {
    return this._http.get(this.tycardbyid+id);
  }
}
