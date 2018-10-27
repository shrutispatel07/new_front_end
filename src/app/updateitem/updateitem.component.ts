import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../services/item.service';
import { ActivatedRoute, Router } from '@angular/router';
import { item } from '../manageitems/item';

@Component({
  selector: 'app-updateitem',
  templateUrl: './updateitem.component.html',
  styleUrls: ['./updateitem.component.css']
})
export class UpdateitemComponent implements OnInit {
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
  constructor(private _item:ItemService,private _actroute:ActivatedRoute,private _router:Router) { }
  onUpdate()
  {
    this._item.updateItem(new item(this.item_id,this.item_name,this.fk_category_id,this.price,this.qty,this.description,this.item_img,this.size,this.colours)).subscribe(
      (data:any)=>
      {
        this._router.navigate(['']);
      }
    );
  }
  onCancel()
  {
      this._router.navigate(['']);
  }
  ngOnInit() {
    this.item_id=this._actroute.snapshot.params['item_id'];
    this._item.getItemById(this.item_id).subscribe(
      (data:item[])=>
      {
        console.log(data);
        this.item_id=data[0].item_id;
        console.log(this.item_id);
        this.item_name=data[0].item_name;
        console.log(this.item_name);
        this.fk_category_id=data[0].fk_category_id;
        console.log(this.fk_category_id);
        this.price=data[0].price;
        console.log(this.price);
        this.qty=data[0].qty;
        console.log(this.qty);
        this.description=data[0].description;
        console.log(this.description);
        this.item_img=data[0].item_img;
        console.log(this.item_img);
        this.size=data[0].size;
        console.log(this.size);
        this.colours=data[0].colours;
        console.log(this.colours);
      }
    );
  }

}
