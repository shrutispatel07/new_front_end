import { Component, OnInit,ViewChild } from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import { category } from '../managecategory/categoryclass';
import { ManagecategoryService } from '../../services/managecategory.service';
import { MatTableDataSource,MatPaginator,MatSort } from '@angular/material';
import { Router } from '@angular/router';
@Component({
  selector: 'app-managecategory',
  templateUrl: './managecategory.component.html',
  styleUrls: ['./managecategory.component.css']
})
export class ManagecategoryComponent implements OnInit {
  category_id:number;
  category_name:string;
  categories:category[]=[];
  delarr:category[]=[];
  i:number;
  displayedcolumns:string[]=['Action1','category_name','Action'];
  dataSource=new MatTableDataSource();
  selection = new SelectionModel<category>(true, []);



  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  constructor(public _cat:ManagecategoryService,private _router:Router) { }

  onAdd()
  {
        this._router.navigate(['/addcategory']);
  }
  onMulDel()
  {
      this._cat.delMulCat(this.delarr).subscribe(
        (x:any)=>
        {
          for(this.i=0;this.i<this.delarr.length;this.i++)
          {
            if(this.categories.find(x=>x==this.delarr[this.i])){
              this.categories.splice(this.categories.indexOf(this.delarr[this.i]),1);
            }
          }
          this.dataSource.data=this.categories;
        }
      );
  }

  checked(item:category)
  {
      if(this.delarr.find(x=>x==item))
      {
        this.delarr.splice(this.delarr.indexOf(item),1);
      }
      else{
        this.delarr.push(item);
      }
  }
  onUpdate(item:category)
  {
      this._router.navigate(['/updatecategory',item.category_id]);
  }
  onDel(item)
  {
    this._cat.delCat(item).subscribe(
      (data:any)=>
      {
        this.categories.splice(this.categories.indexOf(item),1);
        alert('Successfully Deleted!!');
        this.dataSource.data=this.categories;
      }
    );
  }

    ngOnInit() {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.getAllCategory();
    }

    applyFilter(filterValue: string) {
      this.dataSource.filter = filterValue.trim().toLowerCase();

      if (this.dataSource.paginator) {
       this.dataSource.paginator.firstPage();
       }
     }

  getAllCategory()
  {
    this._cat.getAllCategory().subscribe(
      (data:category[])=>{

        this.categories=data;
        this.dataSource.data=this.categories;
      }
    );
  }

}
