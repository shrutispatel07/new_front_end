import { Injectable } from '@angular/core';
import { category } from '../app/managecategory/categoryclass';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ManagecategoryService {

  category:string="http://localhost:3000/category/";
  categorybyid:string="http://localhost:3000/categorybyid/";

  constructor(public _http:HttpClient) { }

  getAllCategory()
  {
    return this._http.get(this.category);
  }

  addCat(item)
  {
    let body=JSON.stringify(item);
    let head=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.category,body,{headers:head});
  }

  updateCat(item:category)
  {
    let body=JSON.stringify(item);
    let head=new HttpHeaders().set('Content-Type','application/json');
    return this._http.put(this.category+item.category_id,body,{headers:head});
  }

  delCat(item)
  {
    let head=new HttpHeaders().set('Content-Type','application/json');
    return this._http.delete(this.category+item.category_id,{headers:head});
  }

  getCatById(category_id:number)
  {
    return this._http.get(this.categorybyid+category_id);
  }

  delMulCat(item:category[])
  {
    let body=JSON.stringify(item);
    let head=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.categorybyid,body,{headers:head});
  }
}
