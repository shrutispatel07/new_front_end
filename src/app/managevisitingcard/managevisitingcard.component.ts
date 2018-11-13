import { Component, OnInit ,ViewChild} from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import { MatTableDataSource,MatPaginator,MatSort } from '@angular/material';
import { visitingcard } from './visitingcard';
import { carduser } from './carduser';
import { VisitingcardService } from '../../services/visitingcard.service';
import { Router } from '@angular/router';
import {animate, state, style, transition, trigger} from '@angular/animations';
@Component({
  selector: 'app-managevisitingcard',
  templateUrl: './managevisitingcard.component.html',
  styleUrls: ['./managevisitingcard.component.css']
})
export class ManagevisitingcardComponent implements OnInit {
  cname:string;
  ownername:string;
  tagline:string;
  phone:string;
  Address:string;
  email:string;
  web:string;
  requirements:string;
  fk_email_id:string;
  email_id:string;
  password:string;
  name:string;
  address:string;
  mobile_no:string;
  state:string;
  gender:string;
  country:string;
  type:string;
  visitingcard:visitingcard[]=[];
  carduser:carduser[]=[];
  delarr:carduser[]=[];
  expandedElement: carduser;
  displayedcolumns:string[]=['Action1','cname','ownername','tagline','phone','Address','email','web','requirements','fk_email_id','Action'];
  dataSource=new MatTableDataSource();
  selection = new SelectionModel<carduser>(true, []);
  constructor(private _card:VisitingcardService,private _router:Router) { }
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  onAdd()
  {
      this._router.navigate(['/addvisitingcard']);
  }
  onUpdate(item:carduser)
  {
      this._router.navigate(['/updatevisitingcard',item.id]);
      console.log(this.cname);
  }
  onDel(item)
  {
    this._card.delCard(item).subscribe(
      (data:any)=>
      {
        this.carduser.splice(this.carduser.indexOf(item),1);
        alert('Successfully Deleted!!');
        this.dataSource.data=this.carduser;
      }
    );
  }
  checked(item:carduser)
  {
      if(this.delarr.find(x=>x==item))
      {
        this.delarr.splice(this.delarr.indexOf(item),1);
      }
      else{
        this.delarr.push(item);
      }
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.getAllCard();
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
     this.dataSource.paginator.firstPage();
     }
   }
   getAllCard()
  {
    this._card.getAllCard().subscribe(
      (data:carduser[])=>{

        this.carduser=data;
        this.dataSource.data=this.carduser;
      }
    );
  }


}
