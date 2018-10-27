import { Component, OnInit,ViewChild } from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import { MatTableDataSource,MatPaginator,MatSort } from '@angular/material';
import { envelop } from './envelop';
import { envelopuser } from './envelopuser';
import { EnvelopsService } from '../../services/envelops.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-manageenvelops',
  templateUrl: './manageenvelops.component.html',
  styleUrls: ['./manageenvelops.component.css']
})
export class ManageenvelopsComponent implements OnInit {
  cname:string;
  Address:string;
  phone:string;
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
  envelop:envelop[]=[];
  envelopuser:envelopuser[]=[];
  delarr:envelopuser[]=[];
  displayedcolumns:string[]=['Action1','cname','Address','phone','requirements','fk_email_id','Action'];
  dataSource=new MatTableDataSource();
  selection = new SelectionModel<envelopuser>(true, []);
  constructor(private _envelop:EnvelopsService,private _router:Router) { }
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  onAdd()
  {
      this._router.navigate(['/addenvelop']);
  }
  onUpdate(item:envelopuser)
  {
      this._router.navigate(['/updateenvelop',item.cname]);
      console.log(this.cname);
  }
  onDel(item)
  {
    this._envelop.delEnvelop(item).subscribe(
      (data:any)=>
      {
        this.envelopuser.splice(this.envelopuser.indexOf(item),1);
        alert('Successfully Deleted!!');
        this.dataSource.data=this.envelopuser;
      }
    );
  }
  checked(item:envelopuser)
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
    this.getAllEnvelop();
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
     this.dataSource.paginator.firstPage();
     }
   }
   getAllEnvelop()
  {
    this._envelop.getAllEnvelop().subscribe(
      (data:envelopuser[])=>{

        this.envelopuser=data;
        this.dataSource.data=this.envelopuser;
      }
    );
  }

}
