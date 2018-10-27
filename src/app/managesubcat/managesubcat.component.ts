import { Component, OnInit,ViewChild } from '@angular/core';
import { subcat } from '../managesubcat/subcat';
import {SelectionModel} from '@angular/cdk/collections';
import { MatTableDataSource,MatPaginator,MatSort } from '@angular/material';
import { Router } from '@angular/router';
import { ManagesubcatService } from '../../services/managesubcat.service';
import { subcategory } from './subcategory';


@Component({
  selector: 'app-managesubcat',
  templateUrl: './managesubcat.component.html',
  styleUrls: ['./managesubcat.component.css']
})
export class ManagesubcatComponent implements OnInit {
  category_id:number;
  category_name:string;
  subcat_id:number;
  subcat_name:string;
  subcat:subcat[]=[];
  subcategory:subcategory[]=[];
  delarr:subcat[]=[];
  displayedcolumns:string[]=['Action1','subcat_name','Action'];
  dataSource=new MatTableDataSource();
  selection = new SelectionModel<subcat>(true, []);



  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private _router:Router,private _subcat:ManagesubcatService) { }
  onAdd()
  {
    this._router.navigate(['/addsubcategory']);
  }

  checked(item:subcat)
  {
      if(this.delarr.find(x=>x==item))
      {
        this.delarr.splice(this.delarr.indexOf(item),1);
      }
      else{
        this.delarr.push(item);
      }
  }
  onUpdate(item:subcat)
  {
      this._router.navigate(['/updatesubcategory',item.subcat_id]);
  }

  onDel(item)
  {
    this._subcat.delSubCat(item).subscribe(
      (data:any)=>
      {
        this.subcat.splice(this.subcat.indexOf(item),1);
        alert('Successfully Deleted!!');
        this.dataSource.data=this.subcat;
      }
    );
  }
  ngOnInit() {
    this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.getAllSubCategory();
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
     this.dataSource.paginator.firstPage();
     }
   }
   getAllSubCategory()
  {
    this._subcat.getAllSubCategory().subscribe(
      (data:subcat[])=>{

        this.subcat=data;
        this.dataSource.data=this.subcat;
      }
    );
  }

}
