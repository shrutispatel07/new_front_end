import { Component, OnInit } from '@angular/core';
import { FlyerService } from '../../services/flyer.service';
import { Router } from '@angular/router';
import { flyer } from '../manageflyer/flyer';
@Component({
  selector: 'app-addflyer',
  templateUrl: './addflyer.component.html',
  styleUrls: ['./addflyer.component.css']
})
export class AddflyerComponent implements OnInit {
  id:number;
  cname:string;
  hline:string;
  phone:string;
  Address:string;
  offer:string;
  requirements:string;
  fk_email_id:string;
  constructor(private _flyer:FlyerService,private _router:Router) { }

  onAdd()
  {
    this._flyer.addFlyer(new flyer(this.id,this.cname,this.hline,this.phone,this.Address,this.offer,this.requirements,this.fk_email_id)).subscribe(
      (data:flyer[])=>
      {
        console.log(data);
        alert('Successfully Added!!');
        this._router.navigate(['/manageflyer']);
      }
    );
  }
  onCancel()
  {
      this._router.navigate(['/manageflyer']);
  }

  ngOnInit() {
  }

}
