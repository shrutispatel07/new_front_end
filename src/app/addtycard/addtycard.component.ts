import { Component, OnInit } from '@angular/core';
import { TycardService } from '../../services/tycard.service';
import { Router } from '@angular/router';
import { tycard } from '../managetycard/tycard';
@Component({
  selector: 'app-addtycard',
  templateUrl: './addtycard.component.html',
  styleUrls: ['./addtycard.component.css']
})
export class AddtycardComponent implements OnInit {
  id:number;
  cname:string;
  yourtext:string;
  requirements:string;
  fk_email_id:string;
  constructor(private _tycard:TycardService,private _router:Router) { }

  onAdd()
  {
    this._tycard.addTycard(new tycard(this.id,this.cname,this.yourtext,this.requirements,this.fk_email_id)).subscribe(
      (data:tycard[])=>
      {
        console.log(data);
        alert('Successfully Added!!');
        this._router.navigate(['/managetycard']);
      }
    );
  }
  onCancel()
  {
      this._router.navigate(['/managetycard']);
  }
  ngOnInit() {
  }

}
