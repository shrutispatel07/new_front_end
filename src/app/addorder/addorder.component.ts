import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../services/order.service';
import { Router } from '@angular/router';
import { order } from '../manageorder/order';

@Component({
  selector: 'app-addorder',
  templateUrl: './addorder.component.html',
  styleUrls: ['./addorder.component.css']
})
export class AddorderComponent implements OnInit {
  order_id:number;
  qty:number;
  price:number;
  status:string;
  date:string;
  fk_email_id:string;
  fk_item_id:number;
  selected = '';
  constructor(private _order:OrderService,private _router:Router) { }
  onAdd()
  {
    this._order.addOrder(new order(this.order_id,this.qty,this.price,this.status,this.date,this.fk_email_id,this.fk_item_id)).subscribe(
      (data:order[])=>
      {
        console.log(data);
        alert('Successfully Added!!');
        this._router.navigate(['/manageorder']);
      }
    );
  }
  onCancel()
  {
      this._router.navigate(['/manageorder']);
  }
  ngOnInit() {
  }

}
