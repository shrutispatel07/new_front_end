import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../services/order.service';
import { ActivatedRoute, Router } from '@angular/router';
import { order } from '../manageorder/order';

@Component({
  selector: 'app-updateorder',
  templateUrl: './updateorder.component.html',
  styleUrls: ['./updateorder.component.css']
})
export class UpdateorderComponent implements OnInit {
  order_id:number;
  qty:number;
  price:number;
  status:string;
  date:string;
  fk_email_id:string;
  fk_item_id:number;
  selected = '';
  constructor(private _order:OrderService,private _actroute:ActivatedRoute,private _router:Router) { }
  onUpdate()
  {
    this._order.updateOrder(new order(this.order_id,this.qty,this.price,this.status,this.date,this.fk_email_id,this.fk_item_id)).subscribe(
      (data:any)=>
      {
        console.log(data);
        this._router.navigate(['/manageorder']);
      }
    );
  }
  onCancel()
  {
    this._router.navigate(['/manageorder']);
  }
  ngOnInit() {
    this.order_id=this._actroute.snapshot.params['order_id'];
    this._order.getOrderById(this.order_id).subscribe(
      (data:order[])=>
      {
        console.log(data);
        this.order_id=data[0].order_id;
        console.log(this.order_id);
        this.qty=data[0].qty;
        console.log(this.qty);
        this.price=data[0].price;
        console.log(this.price);
        this.status=data[0].status;
        console.log(this.status);
        this.date=data[0].date;
        console.log(this.date);
        this.fk_email_id=data[0].fk_email_id;
        console.log(this.fk_email_id);
        this.fk_item_id=data[0].fk_item_id;
        console.log(this.fk_item_id);
      }
    );
  }

}
