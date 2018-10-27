import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import { signup } from '../signup/signup';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css']
})
export class ForgetpasswordComponent implements OnInit {
  email_id:string;
  mobile_no:string;
  pass:string;
  flag:boolean=false;
  constructor(private _login:LoginService,private _router:Router) { }

  ngOnInit() {
    this.email_id=localStorage.getItem('id');
    console.log(this.email_id);
  }

  onOk()
  {
    this._login.getUserbyId(this.email_id).subscribe(
      (data:any[])=>
      {
        if(data.length>0)
        {
          if(this.mobile_no==data[0].mobile_no)
          {
            this.flag=true;
            this.pass=data[0].password;
            console.log(this.pass);
          }
          else
          {
            alert('mobile no is incorrect');
          }
        }
        else
        {
          alert('Email Id is incorrect');
        }

      }
    );
  }
  onCancel()
  {
    this._router.navigate(['']);
  }

}
