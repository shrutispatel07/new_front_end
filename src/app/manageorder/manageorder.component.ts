import { Component, OnInit ,ViewChild} from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import { MatTableDataSource,MatPaginator,MatSort } from '@angular/material';
import { Router } from '@angular/router';
import { OrderService } from '../../services/order.service';
import { order } from './order';
import { orderuser } from './orderuser';
@Component({
  selector: 'app-manageorder',
  templateUrl: './manageorder.component.html',
  styleUrls: ['./manageorder.component.css']
})
export class ManageorderComponent implements OnInit {
  order_id:number;
  qty:number;
  price:number;
  status:string;
  date:string;
  fk_email_id:string;
  fk_item_id:number;
  email_id:string;
  password:string;
  name:string;
  address:string;
  mobile_no:string;
  state:string;
  gender:string;
  country:string;
  type:string;
  order:order[]=[];
  orderuser:orderuser[]=[];
  delarr:orderuser[]=[];
  displayedcolumns:string[]=['Action1','qty','price','status','date','fk_email_id','Action'];
  dataSource=new MatTableDataSource();
  selection = new SelectionModel<orderuser>(true, []);


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private _order:OrderService,private _router:Router) { }
  onAdd()
  {
      this._router.navigate(['/addorder']);
  }
  onUpdate(item:orderuser)
  {
      this._router.navigate(['/updateorder',item.order_id]);
      console.log(this.order_id);
  }
  onDel(item)
  {
    this._order.delOrder(item).subscribe(
      (data:any)=>
      {
        this.orderuser.splice(this.orderuser.indexOf(item),1);
        alert('Successfully Deleted!!');
        this.dataSource.data=this.orderuser;
      }
    );
  }
  checked(item:orderuser)
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
      this.getAllOrder();
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
     this.dataSource.paginator.firstPage();
     }
   }
   getAllOrder()
  {
    this._order.getAllOrder().subscribe(
      (data:orderuser[])=>{

        this.orderuser=data;
        this.dataSource.data=this.orderuser;
      }
    );
  }

}
