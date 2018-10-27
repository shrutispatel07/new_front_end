import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import { signup } from '../signup/signup';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email_id:string;
  pass:string;
  flag:boolean=true;
  constructor(private _login:LoginService,private _router:Router) { }


  ngOnInit() {
  }
  onnew()
  {
      this._router.navigate(['/signup']);
  }
  onForget()
  {
    localStorage.setItem('id',this.email_id);
    this._router.navigate(['/forgetpass']);
  }
  onLogin()
  {
    this._login.LogIn(new signup(this.email_id,this.pass)).subscribe(
      (data:signup[])=>
    {
      console.log(this.email_id);
      console.log(this.pass);
      if(data.length==1)
      {
        localStorage.setItem('id',this.email_id);
        this._router.navigate(['/menu']);
      }
      else
      {
        alert('email_id or password incorrect');
      }

    }
    );
  }
}
