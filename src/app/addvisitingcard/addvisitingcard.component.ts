import { Component, OnInit } from '@angular/core';
import { VisitingcardService } from '../../services/visitingcard.service';
import { Router } from '@angular/router';
import { visitingcard } from '../managevisitingcard/visitingcard';

@Component({
  selector: 'app-addvisitingcard',
  templateUrl: './addvisitingcard.component.html',
  styleUrls: ['./addvisitingcard.component.css']
})
export class AddvisitingcardComponent implements OnInit {
  id:number;
  cname:string;
  ownername:string;
  tagline:string;
  phone:string;
  Address:string;
  email:string;
  web:string;
  requirements:string;
  fk_email_id:string;
  email_id:string;
  password:string;
  name:string;
  address:string;
  mobile_no:string;
  state:string;
  gender:string;
  country:string;
  type:string;
  constructor(private _card:VisitingcardService,private _router:Router) { }
  onAdd()
  {
    this._card.addCard(new visitingcard(this.id,this.cname,this.ownername,this.tagline,this.phone,this.Address,this.email,this.web,this.requirements,this.fk_email_id)).subscribe(
      (data:visitingcard[])=>
      {
        console.log(data);
        alert('Successfully Added!!');
        this._router.navigate(['/managevisitingcard']);
      }
    );
  }
  onCancel()
  {
      this._router.navigate(['/managevisitingcard']);
  }
  ngOnInit() {
  }

}
