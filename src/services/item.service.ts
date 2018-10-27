import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { item } from '../app/manageitems/item';
@Injectable({
  providedIn: 'root'
})
export class ItemService {
  item:string="http://localhost:3000/item/";
  itembyid:string="http://localhost:3000/itembyid/";
  joinitem:string="http://localhost:3000/joinitem/";
  constructor(private _http:HttpClient) { }

  getAllItem()
  {
    return this._http.get(this.item);
  }


  addItem(item)
  {
    let body=JSON.stringify(item);
    let head=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.item,body,{headers:head});
  }

  updateItem(item:item)
  {
    let body=JSON.stringify(item);
    let head=new HttpHeaders().set('Content-Type','application/json');
    return this._http.put(this.item+item.item_id,body,{headers:head});
  }

  delItem(item)
  {
    let head=new HttpHeaders().set('Content-Type','application/json');
    return this._http.delete(this.item+item.item_id,{headers:head});
  }

  getItemByCatId(item_id:number)
  {
    return this._http.get(this.joinitem+item_id);
  }
  getItemById(item_id:number)
  {
    return this._http.get(this.itembyid+item_id);
  }
}
