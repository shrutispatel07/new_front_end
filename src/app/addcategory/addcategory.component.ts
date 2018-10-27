import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { category } from '../managecategory/categoryclass';
import { ManagecategoryService } from '../../services/managecategory.service';

@Component({
  selector: 'app-addcategory',
  templateUrl: './addcategory.component.html',
  styleUrls: ['./addcategory.component.css']
})
export class AddcategoryComponent implements OnInit {
  category_id:number;
  category_name:string;

  constructor(private _router:Router,public _addcategory:ManagecategoryService) { }


  onCancel()
  {
    this._router.navigate(['/managecategory']);
  }

  onAdd()
  {
      this._addcategory.addCat(new category(this.category_id,this.category_name)).subscribe(
        (data:category[])=>
        {
          console.log(data);
          alert('Successfully Added!!');
          this._router.navigate(['/managecategory']);
        }
      );
  }

  ngOnInit() {
  }

}
