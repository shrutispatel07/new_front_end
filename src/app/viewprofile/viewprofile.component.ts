import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import { signup } from '../signup/signup';

@Component({
  selector: 'app-viewprofile',
  templateUrl: './viewprofile.component.html',
  styleUrls: ['./viewprofile.component.css']
})
export class ViewprofileComponent implements OnInit {
  email_id:string;
  password:string;
  name:string;
  address:string;
  gender:string="Female";
  mobile_no:string;
  state:string;
  country:string;
  type:string;
  constructor(private _login:LoginService,private _router:Router) { }

  ngOnInit() {
    this.email_id = localStorage.getItem('id');

    this._login.getUserbyId(this.email_id).subscribe(

      (data:signup[])=>{
        this.name=data[0].name;
        this.address=data[0].address;
        this.gender=data[0].gender;
        this.mobile_no=data[0].mobile_no;
        this.state=data[0].state;
        this.country=data[0].country;
      this.type=data[0].type;
      }
    );
  }
  onLogout()
  {
      this._router.navigate(['']);
  }
  onUpdate()
  {
      this._router.navigate(['/editprofile']);
  }
  onUpdatePass()
  {
      this._router.navigate(['/updatepass']);
  }
}
