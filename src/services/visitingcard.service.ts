import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { visitingcard } from '../app/managevisitingcard/visitingcard';

@Injectable({
  providedIn: 'root'
})
export class VisitingcardService {
  visitingcard:string="http://localhost:3000/visitingcard/";
  cardbyid:string="http://localhost:3000/cardbyid/";
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
    return this._http.put(this.visitingcard+item.id,body,{headers:head});
  }

  delCard(item)
  {
    let head=new HttpHeaders().set('Content-Type','application/json');
    return this._http.delete(this.visitingcard+item.id,{headers:head});
  }

  getCardByUserId(id:string)
  {
    return this._http.get(this.joincard+id);
  }
  getCardById(id:number)
  {
    return this._http.get(this.cardbyid+id);
  }
}
