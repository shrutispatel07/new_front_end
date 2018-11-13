import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { envelop } from '../app/manageenvelops/envelop';
@Injectable({
  providedIn: 'root'
})
export class EnvelopsService {
  envelop:string="http://localhost:3000/envelop/";
  envelopbyid:string="http://localhost:3000/envelopbyid/";
  joinenvelop:string="http://localhost:3000/joinenvelop/";
  constructor(private _http:HttpClient) { }

  getAllEnvelop()
  {
    return this._http.get(this.envelop);
  }


  addEnvelop(item)
  {
    let body=JSON.stringify(item);
    let head=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.envelop,body,{headers:head});
  }

  updateEnvelop(item:envelop)
  {
    let body=JSON.stringify(item);
    let head=new HttpHeaders().set('Content-Type','application/json');
    return this._http.put(this.envelop+item.id,body,{headers:head});
  }

  delEnvelop(item)
  {
    let head=new HttpHeaders().set('Content-Type','application/json');
    return this._http.delete(this.envelop+item.id,{headers:head});
  }

  getEnvelopByUserId(id:string)
  {
    return this._http.get(this.joinenvelop+id);
  }
  getEnvelopById(id:number)
  {
    return this._http.get(this.envelopbyid+id);
  }
}
