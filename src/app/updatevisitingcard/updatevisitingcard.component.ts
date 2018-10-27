import { Component, OnInit } from '@angular/core';
import { VisitingcardService } from '../../services/visitingcard.service';
import { ActivatedRoute, Router } from '@angular/router';
import { visitingcard } from '../managevisitingcard/visitingcard';

@Component({
  selector: 'app-updatevisitingcard',
  templateUrl: './updatevisitingcard.component.html',
  styleUrls: ['./updatevisitingcard.component.css']
})
export class UpdatevisitingcardComponent implements OnInit {
  cname:string;
  ownername:string;
  tagline:string;
  phone:string;
  Address:string;
  email:string;
  web:string;
  requirements:string;
  fk_email_id:string;
  visitingcard:visitingcard[]=[];
  constructor(private _card:VisitingcardService,private _router:Router,private _actroute:ActivatedRoute) { }
  onUpdate()
  {
    this._card.updateCard(new visitingcard(this.cname,this.ownername,this.tagline,this.phone,this.Address,this.email,this.web,this.requirements,this.fk_email_id)).subscribe(
      (data:any)=>
      {
        console.log(data);
        this._router.navigate(['/managevisitingcard']);
      }
    );
  }
  onCancel()
  {
      this._router.navigate(['managevisitingcard']);
  }
  ngOnInit() {
    this.cname=this._actroute.snapshot.params['cname'];
    this._card.getCardByCname(this.cname).subscribe(
      (data:visitingcard[])=>
      {
        console.log(data);
        this.cname=data[0].cname;
        console.log(this.cname);
        this.ownername=data[0].ownername;
        console.log(this.ownername);
        this.tagline=data[0].tagline;
        console.log(this.tagline);
        this.phone=data[0].phone;
        console.log(this.phone);
        this.Address=data[0].Address;
        console.log(this.Address);
        this.email=data[0].email;
        console.log(this.email);
        this.web=data[0].web;
        console.log(this.web);
        this.requirements=data[0].requirements;
        console.log(this.requirements);
        this.fk_email_id=data[0].fk_email_id;
        console.log(this.fk_email_id);
      }
    );
  }

}
