import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ItemService } from '../../services/item.service';
import { item } from '../manageitems/item';
@Component({
  selector: 'app-additem',
  templateUrl: './additem.component.html',
  styleUrls: ['./additem.component.css']
})
export class AdditemComponent implements OnInit {
  item_id:number;
  item_name:string;
  fk_category_id:number;
  price:number;
  qty:number;
  description:string;
  item_img:string;
  size:string;
  colours:string;
  category_id:number;
  category_name:string;
  constructor(private _item:ItemService,private _router:Router) { }
  onAdd()
  {
    this._item.addItem(new item(this.item_id,this.item_name,this.fk_category_id,this.price,this.qty,this.description,this.item_img,this.size,this.colours)).subscribe(
      (data:item[])=>
      {
        console.log(data);
        alert('Successfully Added!!');
        this._router.navigate(['']);
      }
    );
  }
  onCancel()
  {
      this._router.navigate(['']);
  }
  ngOnInit() {
  }

}
