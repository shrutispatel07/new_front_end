import { Injectable } from '@angular/core';
import { subcat } from '../app/managesubcat/subcat';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { subcategory } from '../app/managesubcat/subcategory';


@Injectable({
  providedIn: 'root'
})
export class ManagesubcatService {

  subcategory:string="http://localhost:3000/subcategory/";
  subcat:string="http://localhost:3000/subcat/";
  subcatbyid:string="http://localhost:3000/subcatbyid/";

  constructor(public _http:HttpClient) { }
  getAllSubCategory()
  {
    return this._http.get(this.subcategory);
  }


  addSubCat(item)
  {
    let body=JSON.stringify(item);
    let head=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.subcategory,body,{headers:head});
  }

  updateSubCat(item:subcategory)
  {
    let body=JSON.stringify(item);
    let head=new HttpHeaders().set('Content-Type','application/json');
    return this._http.put(this.subcategory+item.subcat_id,body,{headers:head});
  }

  delSubCat(item)
  {
    let head=new HttpHeaders().set('Content-Type','application/json');
    return this._http.delete(this.subcategory+item.subcat_id,{headers:head});
  }

  getSubCatByCatId(subcat_id:number)
  {
    return this._http.get(this.subcat+subcat_id);
  }
  getSubCatById(subcat_id:number)
  {
    return this._http.get(this.subcatbyid+subcat_id);
  }
}
