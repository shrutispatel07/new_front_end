import { Component, OnInit } from '@angular/core';
import { subcat } from '../managesubcat/subcat';
import { subcategory } from '../managesubcat/subcategory';
import { ManagesubcatService } from '../../services/managesubcat.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-updatesubcat',
  templateUrl: './updatesubcat.component.html',
  styleUrls: ['./updatesubcat.component.css']
})
export class UpdatesubcatComponent implements OnInit {
  category_id:number;
  category_name:string;
  subcat_id:number;
  subcat_name:string;
  fk_cat_id:number;
  constructor(public _subcat:ManagesubcatService,private _router:Router,private _actroute:ActivatedRoute) { }

  onCancel()
  {
    this._router.navigate(['/managesubcategory']);
  }

  onUpdate()
  {
      this._subcat.updateSubCat(new subcategory(this.subcat_id,this.subcat_name,this.fk_cat_id)).subscribe(
        (data:any)=>
        {
          this._router.navigate(['']);
        }
      );
  }
  ngOnInit() {
    this.subcat_id=this._actroute.snapshot.params['subcat_id'];
    this._subcat.getSubCatById(this.subcat_id).subscribe(
      (data:subcategory[])=>
      {
        console.log(data);
        this.subcat_id=data[0].subcat_id;
        console.log(this.subcat_id);
        this.subcat_name=data[0].subcat_name;
        console.log(this.subcat_name);
        this.fk_cat_id=data[0].fk_cat_id;
        console.log(this.fk_cat_id);
      }
    );
  }

}
