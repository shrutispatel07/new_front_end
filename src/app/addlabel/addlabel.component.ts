import { Component, OnInit } from '@angular/core';
import { LabelService } from '../../services/label.service';
import { Router } from '@angular/router';
import { label } from '../managelabel/label';

@Component({
  selector: 'app-addlabel',
  templateUrl: './addlabel.component.html',
  styleUrls: ['./addlabel.component.css']
})
export class AddlabelComponent implements OnInit {
  cname:string;
  ownername:string;
  Address:string;
  phone:string;
  requirements:string;
  fk_email_id:string;
  constructor(private _label:LabelService,private _router:Router) { }
  onAdd()
  {
    this._label.addLabel(new label(this.cname,this.ownername,this.Address,this.phone,this.requirements,this.fk_email_id)).subscribe(
      (data:label[])=>
      {
        console.log(data);
        alert('Successfully Added!!');
        this._router.navigate(['/managelabel']);
      }
    );
  }
  onCancel()
  {
      this._router.navigate(['/managelabel']);
  }
  ngOnInit() {
  }

}
