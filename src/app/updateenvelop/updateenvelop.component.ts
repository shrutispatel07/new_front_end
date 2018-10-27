import { Component, OnInit } from '@angular/core';
import { EnvelopsService } from '../../services/envelops.service';
import { Router, ActivatedRoute } from '@angular/router';
import { envelop } from '../manageenvelops/envelop';

@Component({
  selector: 'app-updateenvelop',
  templateUrl: './updateenvelop.component.html',
  styleUrls: ['./updateenvelop.component.css']
})
export class UpdateenvelopComponent implements OnInit {
  cname:string;
  Address:string;
  phone:string;
  requirements:string;
  fk_email_id:string;
  envelop:envelop[]=[];
  constructor(private _envelop:EnvelopsService,private _router:Router,private _actroute:ActivatedRoute) { }
  onUpdate()
  {
    this._envelop.updateEnvelop(new envelop(this.cname,this.Address,this.phone,this.requirements,this.fk_email_id)).subscribe(
      (data:any)=>
      {
        console.log(data);
        this._router.navigate(['/manageenvelop']);
      }
    );
  }
  onCancel()
  {
      this._router.navigate(['manageenvelop']);
  }
  ngOnInit() {
    this.cname=this._actroute.snapshot.params['cname'];
    this._envelop.getEnvelopByCname(this.cname).subscribe(
      (data:envelop[])=>
      {
        console.log(data);
        this.cname=data[0].cname;
        console.log(this.cname);
        this.Address=data[0].Address;
        console.log(this.Address);
        this.phone=data[0].phone;
        console.log(this.phone);
        this.requirements=data[0].requirements;
        console.log(this.requirements);
        this.fk_email_id=data[0].fk_email_id;
        console.log(this.fk_email_id);
      }
    );
  }

}
