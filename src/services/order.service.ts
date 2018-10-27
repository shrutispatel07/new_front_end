import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { order } from '../app/manageorder/order';
@Injectable({
  providedIn: 'root'
})
export class OrderService {
  order:string="http://localhost:3000/order/";
  orderbyid:string="http://localhost:3000/orderbyid/";
  joinorder:string="http://localhost:3000/joinorder/";
  constructor(private _http:HttpClient) { }

  getAllOrder()
  {
    return this._http.get(this.order);
  }


  addOrder(item)
  {
    let body=JSON.stringify(item);
    let head=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.order,body,{headers:head});
  }

  updateOrder(item:order)
  {
    let body=JSON.stringify(item);
    let head=new HttpHeaders().set('Content-Type','application/json');
    return this._http.put(this.order+item.order_id,body,{headers:head});
  }

  delOrder(item)
  {
    let head=new HttpHeaders().set('Content-Type','application/json');
    return this._http.delete(this.order+item.order_id,{headers:head});
  }

  getOrderByUserId(order_id:number)
  {
    return this._http.get(this.joinorder+order_id);
  }
  getOrderById(order_id:number)
  {
    return this._http.get(this.orderbyid+order_id);
  }
}
