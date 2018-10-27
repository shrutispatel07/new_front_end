import { Component, OnInit } from '@angular/core';
import { EnvelopsService } from '../../services/envelops.service';
import { Router } from '@angular/router';
import { envelop } from '../manageenvelops/envelop';

@Component({
  selector: 'app-addenvelop',
  templateUrl: './addenvelop.component.html',
  styleUrls: ['./addenvelop.component.css']
})
export class AddenvelopComponent implements OnInit {
  cname:string;
  Address:string;
  phone:string;
  requirements:string;
  fk_email_id:string;
  constructor(private _envelop:EnvelopsService,private _router:Router) { }
  onAdd()
  {
    this._envelop.addEnvelop(new envelop(this.cname,this.Address,this.phone,this.requirements,this.fk_email_id)).subscribe(
      (data:envelop[])=>
      {
        console.log(data);
        alert('Successfully Added!!');
        this._router.navigate(['/manageenvelop']);
      }
    );
  }
  onCancel()
  {
      this._router.navigate(['/manageenvelop']);
  }
  ngOnInit() {
  }

}
