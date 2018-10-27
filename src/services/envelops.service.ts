import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { envelop } from '../app/manageenvelops/envelop';
@Injectable({
  providedIn: 'root'
})
export class EnvelopsService {
  envelop:string="http://localhost:3000/envelop/";
  envelopbycname:string="http://localhost:3000/envelopbycname/";
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
    return this._http.put(this.envelop+item.cname,body,{headers:head});
  }

  delEnvelop(item)
  {
    let head=new HttpHeaders().set('Content-Type','application/json');
    return this._http.delete(this.envelop+item.cname,{headers:head});
  }

  getEnvelopByUserId(id:string)
  {
    return this._http.get(this.joinenvelop+id);
  }
  getEnvelopByCname(cname:string)
  {
    return this._http.get(this.envelopbycname+cname);
  }
}
