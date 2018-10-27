import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { label } from '../app/managelabel/label';
@Injectable({
  providedIn: 'root'
})
export class LabelService {
  label:string="http://localhost:3000/label/";
  labelbycname:string="http://localhost:3000/labelbycname/";
  joinlabel:string="http://localhost:3000/joinlabel/";
  constructor(private _http:HttpClient) { }

  getAllLabel()
  {
    return this._http.get(this.label);
  }


  addLabel(item)
  {
    let body=JSON.stringify(item);
    let head=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.label,body,{headers:head});
  }

  updateLabel(item:label)
  {
    let body=JSON.stringify(item);
    let head=new HttpHeaders().set('Content-Type','application/json');
    return this._http.put(this.label+item.cname,body,{headers:head});
  }

  delLabel(item)
  {
    let head=new HttpHeaders().set('Content-Type','application/json');
    return this._http.delete(this.label+item.cname,{headers:head});
  }

  getLabelByUserId(id:string)
  {
    return this._http.get(this.joinlabel+id);
  }
  getLabelByCname(cname:string)
  {
    return this._http.get(this.labelbycname+cname);
  }
}
