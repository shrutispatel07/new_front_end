import { Component, OnInit } from '@angular/core';
import { category } from '../managecategory/categoryclass';
import { ManagecategoryService } from '../../services/managecategory.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-updatecategory',
  templateUrl: './updatecategory.component.html',
  styleUrls: ['./updatecategory.component.css']
})
export class UpdatecategoryComponent implements OnInit {
  category_id:number;
  category_name:string;


  constructor(public _category:ManagecategoryService,private _router:Router,private _actroute:ActivatedRoute) { }

  onCancel()
  {
    this._router.navigate(['/managecategory']);
  }

  onUpdate()
  {
      this._category.updateCat(new category(this.category_id,this.category_name)).subscribe(
        (data:any)=>
        {
          this._router.navigate(['']);
        }
      );
  }

  ngOnInit() {
    this.category_id=this._actroute.snapshot.params['category_id'];
    this._category.getCatById(this.category_id).subscribe(
      (data:category[])=>
      {
        console.log(data);
        this.category_id=data[0].category_id;
        console.log(this.category_id);
        this.category_name=data[0].category_name;
        console.log(this.category_name);
      }
    );
  }

}
