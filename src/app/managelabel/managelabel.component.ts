import { Component, OnInit ,ViewChild} from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import { MatTableDataSource,MatPaginator,MatSort } from '@angular/material';
import { LabelService } from '../../services/label.service';
import { Router } from '@angular/router';
import { label } from './label';
import { labeluser } from './labeluser';
@Component({
  selector: 'app-managelabel',
  templateUrl: './managelabel.component.html',
  styleUrls: ['./managelabel.component.css']
})
export class ManagelabelComponent implements OnInit {
  cname:string;
  ownername:string;
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
  label:label[]=[];
  labeluser:labeluser[]=[];
  delarr:labeluser[]=[];
  displayedcolumns:string[]=['Action1','cname','ownername','Address','phone','requirements','fk_email_id','Action'];
  dataSource=new MatTableDataSource();
  selection = new SelectionModel<labeluser>(true, []);
  constructor(private _label:LabelService,private _router:Router) { }
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  onAdd()
  {
      this._router.navigate(['/addlabel']);
  }
  onUpdate(item:labeluser)
  {
      this._router.navigate(['/updatelabel',item.cname]);
      console.log(this.cname);
  }
  onDel(item)
  {
    this._label.delLabel(item).subscribe(
      (data:any)=>
      {
        this.labeluser.splice(this.labeluser.indexOf(item),1);
        alert('Successfully Deleted!!');
        this.dataSource.data=this.labeluser;
      }
    );
  }
  checked(item:labeluser)
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
    this.getAllLabel();
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
     this.dataSource.paginator.firstPage();
     }
   }
   getAllLabel()
  {
    this._label.getAllLabel().subscribe(
      (data:labeluser[])=>{

        this.labeluser=data;
        this.dataSource.data=this.labeluser;
      }
    );
  }
}
