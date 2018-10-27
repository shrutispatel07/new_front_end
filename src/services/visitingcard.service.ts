import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { visitingcard } from '../app/managevisitingcard/visitingcard';

@Injectable({
  providedIn: 'root'
})
export class VisitingcardService {
  visitingcard:string="http://localhost:3000/visitingcard/";
  cardbycname:string="http://localhost:3000/cardbycname/";
  joincard:string="http://localhost:3000/joincard/";
  constructor(private _http:HttpClient) { }

  getAllCard()
  {
    return this._http.get(this.visitingcard);
  }


  addCard(item)
  {
    let body=JSON.stringify(item);
    let head=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.visitingcard,body,{headers:head});
  }

  updateCard(item:visitingcard)
  {
    let body=JSON.stringify(item);
    let head=new HttpHeaders().set('Content-Type','application/json');
    return this._http.put(this.visitingcard+item.cname,body,{headers:head});
  }

  delCard(item)
  {
    let head=new HttpHeaders().set('Content-Type','application/json');
    return this._http.delete(this.visitingcard+item.cname,{headers:head});
  }

  getCardByUserId(id:string)
  {
    return this._http.get(this.joincard+id);
  }
  getCardByCname(cname:string)
  {
    return this._http.get(this.cardbycname+cname);
  }
}
