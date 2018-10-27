import { Component, OnInit,ViewChild } from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import { MatTableDataSource,MatPaginator,MatSort } from '@angular/material';
import { Router } from '@angular/router';
import { ItemService } from '../../services/item.service';
import { itemcat } from './itemcat';
import { item } from './item';

@Component({
  selector: 'app-manageitems',
  templateUrl: './manageitems.component.html',
  styleUrls: ['./manageitems.component.css']
})
export class ManageitemsComponent implements OnInit {
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
  itemcat:itemcat[]=[];
  item:item[]=[];
  delarr:itemcat[]=[];
  displayedcolumns:string[]=['Action1','item_name','price','qty','description','item_img','size','colours','Action'];
  dataSource=new MatTableDataSource();
  selection = new SelectionModel<itemcat>(true, []);


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private _item:ItemService,private _router:Router) { }
  onAdd()
  {
    this._router.navigate(['/additem']);
  }
  onUpdate(item:itemcat)
  {
    this._router.navigate(['/updateitem',item.item_id]);
    console.log(this.item_id);
  }
  onDel(item)
  {
    this._item.delItem(item).subscribe(
      (data:any)=>
      {
        this.itemcat.splice(this.itemcat.indexOf(item),1);
        alert('Successfully Deleted!!');
        this.dataSource.data=this.itemcat;
      }
    );
  }
  checked(item:itemcat)
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
      this.getAllItem();
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
     this.dataSource.paginator.firstPage();
     }
   }
   getAllItem()
  {
    this._item.getAllItem().subscribe(
      (data:itemcat[])=>{

        this.itemcat=data;
        this.dataSource.data=this.itemcat;
      }
    );
  }


}
