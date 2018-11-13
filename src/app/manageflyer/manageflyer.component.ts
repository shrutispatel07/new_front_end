import { Component, OnInit,ViewChild } from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import { MatTableDataSource,MatPaginator,MatSort } from '@angular/material';
import { flyer } from './flyer';
import { flyeruser } from './flyeruser';
import { FlyerService } from '../../services/flyer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manageflyer',
  templateUrl: './manageflyer.component.html',
  styleUrls: ['./manageflyer.component.css']
})
export class ManageflyerComponent implements OnInit {
  id:number;
  cname:string;
  hline:string;
  phone:string;
  Address:string;
  offer:string;
  requirements:string;
  fk_email_id:string;
  email_id:string;
  password:string;
  name:string;
  address:string;
  mobile_no:string;
  state:string;
  gender:string;
  country:string;
  type:string;
  flyer:flyer[]=[];
  flyeruser:flyeruser[]=[];
  delarr:flyeruser[]=[];
  displayedcolumns:string[]=['Action1','cname','hline','phone','Address','offer','requirements','fk_email_id','Action'];
  dataSource=new MatTableDataSource();
  selection = new SelectionModel<flyeruser>(true, []);
  constructor(private _flyer:FlyerService,private _router:Router) { }
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  onAdd()
  {
      this._router.navigate(['/addflyer']);
  }
  onUpdate(item:flyeruser)
  {
      this._router.navigate(['/updateflyer',item.id]);
      console.log(this.id);
  }
  onDel(item)
  {
    this._flyer.delFlyer(item).subscribe(
      (data:any)=>
      {
        this.flyeruser.splice(this.flyeruser.indexOf(item),1);
        alert('Successfully Deleted!!');
        this.dataSource.data=this.flyeruser;
      }
    );
  }
  checked(item:flyeruser)
  {
      if(this.delarr.find(x=>x==item))
      {
        this.delarr.splice(this.delarr.indexOf(item),1);
      }
      else{
        this.delarr.push(item);
      }
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.getAllFlyer();
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
     this.dataSource.paginator.firstPage();
     }
   }
   getAllFlyer()
  {
    this._flyer.getAllFlyer().subscribe(
      (data:flyeruser[])=>{

        this.flyeruser=data;
        this.dataSource.data=this.flyeruser;
      }
    );
  }

}
