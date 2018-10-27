import { Routes,RouterModule } from '@angular/router';
import { ManagecategoryComponent } from './managecategory/managecategory.component';
import { AddcategoryComponent } from './addcategory/addcategory.component';
import { UpdatecategoryComponent } from './updatecategory/updatecategory.component';
import { ManagesubcatComponent } from './managesubcat/managesubcat.component';
import { AddsubcatComponent } from './addsubcat/addsubcat.component';
import { UpdatesubcatComponent } from './updatesubcat/updatesubcat.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { SignupComponent } from './signup/signup.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { UpdatepassComponent } from './updatepass/updatepass.component';
import { ViewprofileComponent } from './viewprofile/viewprofile.component';
import { ManageitemsComponent } from './manageitems/manageitems.component';
import { AdditemComponent } from './additem/additem.component';
import { UpdateitemComponent } from './updateitem/updateitem.component';
import { ManageorderComponent } from './manageorder/manageorder.component';
import { AddorderComponent } from './addorder/addorder.component';
import { UpdateorderComponent } from './updateorder/updateorder.component';
import { ManagevisitingcardComponent } from './managevisitingcard/managevisitingcard.component';
import { AddvisitingcardComponent } from './addvisitingcard/addvisitingcard.component';
import { UpdatevisitingcardComponent } from './updatevisitingcard/updatevisitingcard.component';
import { ManageenvelopsComponent } from './manageenvelops/manageenvelops.component';
import { AddenvelopComponent } from './addenvelop/addenvelop.component';
import { UpdateenvelopComponent } from './updateenvelop/updateenvelop.component';
import { ManagelabelComponent } from './managelabel/managelabel.component';
import { AddlabelComponent } from './addlabel/addlabel.component';
import { UpdatelabelComponent } from './updatelabel/updatelabel.component';
const arr:Routes=[
  {path:'login',component:LoginComponent},
  {path:'',component:ManageitemsComponent},
  {path:'additem',component:AdditemComponent},
  {path:'updateitem/:item_id',component:UpdateitemComponent},
  {path:'manageorder',component:ManageorderComponent},
  {path:'addorder',component:AddorderComponent},
  {path:'updateorder/:order_id',component:UpdateorderComponent},
  {path:'viewprofile',component:ViewprofileComponent},
  {path:'manageitem',component:ManageitemsComponent},
  {path:'menu',component:MenuComponent},
  {path:'signup',component:SignupComponent},
  {path:'forgetpass',component:ForgetpasswordComponent},
  {path:'editprofile',component:EditprofileComponent},
  {path:'updatepass',component:UpdatepassComponent},
  {path:'managecategory',component:ManagecategoryComponent},
  {path:'addcategory',component:AddcategoryComponent},
  {path:'updatecategory/:category_id',component:UpdatecategoryComponent},
  {path:'managevisitingcard',component:ManagevisitingcardComponent},
  {path:'addvisitingcard',component:AddvisitingcardComponent},
  {path:'updatevisitingcard/:cname',component:UpdatevisitingcardComponent},
  {path:'manageenvelop',component:ManageenvelopsComponent},
  {path:'addenvelop',component:AddenvelopComponent},
  {path:'updateenvelop/:cname',component:UpdateenvelopComponent},
  {path:'managelabel',component:ManagelabelComponent},
  {path:'addlabel',component:AddlabelComponent},
  {path:'updatelabel/:cname',component:UpdatelabelComponent},
  {path:'managesubcategory',component:ManagesubcatComponent},
  {path:'addsubcategory',component:AddsubcatComponent},
  {path:'updatesubcategory/:subcat_id',component:UpdatesubcatComponent}
];
export const routes = RouterModule.forRoot(arr);
