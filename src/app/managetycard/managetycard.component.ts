import { Component, OnInit,ViewChild } from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import { MatTableDataSource,MatPaginator,MatSort } from '@angular/material';
import { tycard } from './tycard';
import {tycarduser } from './tycarduser';
import { TycardService } from '../../services/tycard.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-managetycard',
  templateUrl: './managetycard.component.html',
  styleUrls: ['./managetycard.component.css']
})
export class ManagetycardComponent implements OnInit {
  id:number;
  cname:string;
  yourtext:string;
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
  tycard:tycard[]=[];
  tycarduser:tycarduser[]=[];
  delarr:tycarduser[]=[];
  displayedcolumns:string[]=['Action1','cname','yourtext','requirements','fk_email_id','Action'];
  dataSource=new MatTableDataSource();
  selection = new SelectionModel<tycarduser>(true, []);
  constructor(private _tycard:TycardService,private _router:Router) { }
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  onAdd()
  {
      this._router.navigate(['/addtycard']);
  }
  onUpdate(item:tycarduser)
  {
      this._router.navigate(['/updatetycard',item.id]);
      console.log(this.cname);
  }
  onDel(item)
  {
    this._tycard.delTycard(item).subscribe(
      (data:any)=>
      {
        this.tycarduser.splice(this.tycarduser.indexOf(item),1);
        alert('Successfully Deleted!!');
        this.dataSource.data=this.tycarduser;
      }
    );
  }
  checked(item:tycarduser)
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
    this.getAllTycard();
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
     this.dataSource.paginator.firstPage();
     }
   }
   getAllTycard()
  {
    this._tycard.getAllTycard().subscribe(
      (data:tycarduser[])=>{

        this.tycarduser=data;
        this.dataSource.data=this.tycarduser;
      }
    );
  }

}
