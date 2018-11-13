import { Component, OnInit } from '@angular/core';
import { LabelService } from '../../services/label.service';
import { Router, ActivatedRoute } from '@angular/router';
import { label } from '../managelabel/label';

@Component({
  selector: 'app-updatelabel',
  templateUrl: './updatelabel.component.html',
  styleUrls: ['./updatelabel.component.css']
})
export class UpdatelabelComponent implements OnInit {
  id:number;
  cname:string;
  ownername:string;
  Address:string;
  phone:string;
  requirements:string;
  fk_email_id:string;
  constructor(private _label:LabelService,private _actroute:ActivatedRoute,private _router:Router) { }
  onUpdate()
  {
    this._label.updateLabel(new label(this.id,this.cname,this.ownername,this.Address,this.phone,this.requirements,this.fk_email_id)).subscribe(
      (data:any)=>
      {
        console.log(data);
        this._router.navigate(['/managelabel']);
      }
    );
  }
  onCancel()
  {
      this._router.navigate(['/managelabel']);
  }
  ngOnInit() {
    this.id=this._actroute.snapshot.params['id'];
    this._label.getLabelById(this.id).subscribe(
      (data:label[])=>
      {
        console.log(data);
        this.id=data[0].id;
        console.log(this.id);
        this.cname=data[0].cname;
        console.log(this.cname);
        this.ownername=data[0].ownername;
        console.log(this.ownername);
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
