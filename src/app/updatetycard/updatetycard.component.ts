import { Component, OnInit } from '@angular/core';
import { TycardService } from '../../services/tycard.service';
import { Router, ActivatedRoute } from '@angular/router';
import { tycard } from '../managetycard/tycard';

@Component({
  selector: 'app-updatetycard',
  templateUrl: './updatetycard.component.html',
  styleUrls: ['./updatetycard.component.css']
})
export class UpdatetycardComponent implements OnInit {
  id:number;
  cname:string;
  yourtext:string;
  requirements:string;
  fk_email_id:string;
  constructor(private _tycard:TycardService,private _router:Router,private _actroute:ActivatedRoute) { }

  onUpdate()
  {
    this._tycard.updateTycard(new tycard(this.id,this.cname,this.yourtext,this.requirements,this.fk_email_id)).subscribe(
      (data:any)=>
      {
        console.log(data);
        this._router.navigate(['/managetycard']);
      }
    );
  }
  onCancel()
  {
      this._router.navigate(['/managetycard']);
  }
  ngOnInit() {

    this.id=this._actroute.snapshot.params['id'];
    this._tycard.getTycardById(this.id).subscribe(
      (data:tycard[])=>
      {
        console.log(data);
        this.id=data[0].id;
        console.log(this.id);
        this.cname=data[0].cname;
        console.log(this.cname);
        this.yourtext=data[0].yourtext;
        console.log(this.yourtext);
        this.requirements=data[0].requirements;
        console.log(this.requirements);
        this.fk_email_id=data[0].fk_email_id;
        console.log(this.fk_email_id);
      }
    );
  }

}
