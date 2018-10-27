import { Component, OnInit } from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import { signup } from './signup';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  email_id:string;
  pass:string;
  name1:string;
  Address:string;
  gender:string="Female";
  mobile_no:string;
  state:string;
  country:string;
  type:string;
  flag:boolean=false;
  selected = '';
  selected1 = '';
  constructor(private _sign:LoginService,private _router:Router) { }
  onSign()
  {

  this._sign.addUser(new signup(this.email_id,this.pass,this.name1,this.Address,this.gender,this.mobile_no,this.state,this.country,this.type)).subscribe(
    (data:any)=>
    {
      console.log(data);
      alert('successfully added');
    }
  );
  }
  onCancel()
  {
    this._router.navigate(['']);
  }
  ngOnInit() {
  }

}
