import { Component, OnInit } from '@angular/core';
import { FlyerService } from '../../services/flyer.service';
import { Router, ActivatedRoute } from '@angular/router';
import { flyer } from '../manageflyer/flyer';
@Component({
  selector: 'app-updateflyer',
  templateUrl: './updateflyer.component.html',
  styleUrls: ['./updateflyer.component.css']
})
export class UpdateflyerComponent implements OnInit {
  id:number;
  cname:string;
  hline:string;
  phone:string;
  Address:string;
  offer:string;
  requirements:string;
  fk_email_id:string;
  constructor(private _flyer:FlyerService,private _router:Router,private _actroute:ActivatedRoute) { }

  onUpdate()
  {
    this._flyer.updateFlyer(new flyer(this.id,this.cname,this.hline,this.phone,this.Address,this.offer,this.requirements,this.fk_email_id)).subscribe(
      (data:any)=>
      {
        console.log(data);
        this._router.navigate(['/manageflyer']);
      }
    );
  }
  onCancel()
  {
      this._router.navigate(['/manageflyer']);
  }

  ngOnInit() {

    this.id=this._actroute.snapshot.params['id'];
    this._flyer.getFlyerById(this.id).subscribe(
      (data:flyer[])=>
      {
        console.log(data);
        this.id=data[0].id;
        console.log(this.id);
        this.cname=data[0].cname;
        console.log(this.cname);
        this.hline=data[0].hline;
        console.log(this.hline);
        this.phone=data[0].phone;
        console.log(this.phone);
        this.Address=data[0].Address;
        console.log(this.Address);
        this.offer=data[0].offer;
        console.log(this.offer);
        this.requirements=data[0].requirements;
        console.log(this.requirements);
        this.fk_email_id=data[0].fk_email_id;
        console.log(this.fk_email_id);
      }
    );

  }

}
