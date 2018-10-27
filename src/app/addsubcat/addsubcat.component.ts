import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { subcat } from '../managesubcat/subcat';
import { subcategory } from '../managesubcat/subcategory';
import { ManagesubcatService } from '../../services/managesubcat.service';

@Component({
  selector: 'app-addsubcat',
  templateUrl: './addsubcat.component.html',
  styleUrls: ['./addsubcat.component.css']
})
export class AddsubcatComponent implements OnInit {
  category_id:number;
  category_name:string;
  subcat_id:number;
  subcat_name:string;
  fk_cat_id:number;
  constructor(public _subcat:ManagesubcatService,private _router:Router) { }

  onCancel()
  {
    this._router.navigate(['/managesubcategory']);
  }
  onAdd()
  {
      this._subcat.addSubCat(new subcategory(this.subcat_id,this.subcat_name,this.fk_cat_id)).subscribe(
        (data:subcategory[])=>
        {
          console.log(data);
          alert('Successfully Added!!');
          this._router.navigate(['/managesubcategory']);
        }
      );
  }
  ngOnInit() {
  }

}
