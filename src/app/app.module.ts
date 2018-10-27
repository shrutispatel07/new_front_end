import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule,Http} from '@angular/http';
import { routes } from './app.routing';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MatPaginatorModule,MatNativeDateModule,MatDatepickerModule,MatCheckboxModule,MatSelectModule,MatSortModule,MatFormFieldModule,MatIcon,MatButtonModule,MatInputModule, MatIconModule, MatHint, MatTableModule, MatToolbarModule, MatSidenavModule, MatListModule} from '@angular/material';
import {MatRadioModule} from '@angular/material/radio';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ManagecategoryComponent } from './managecategory/managecategory.component';
import { AddcategoryComponent } from './addcategory/addcategory.component';
import { UpdatecategoryComponent } from './updatecategory/updatecategory.component';
import { ManagesubcatComponent } from './managesubcat/managesubcat.component';
import { AddsubcatComponent } from './addsubcat/addsubcat.component';
import { UpdatesubcatComponent } from './updatesubcat/updatesubcat.component';
import { MenuComponent } from './menu/menu.component';
import { LayoutModule } from '@angular/cdk/layout';
import { SignupComponent } from './signup/signup.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { ViewprofileComponent } from './viewprofile/viewprofile.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { UpdatepassComponent } from './updatepass/updatepass.component';
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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ManagecategoryComponent,
    AddcategoryComponent,
    UpdatecategoryComponent,
    ManagesubcatComponent,
    AddsubcatComponent,
    UpdatesubcatComponent,
    MenuComponent,
    SignupComponent,
    ForgetpasswordComponent,
    ViewprofileComponent,
    EditprofileComponent,
    UpdatepassComponent,
    ManageitemsComponent,
    AdditemComponent,
    UpdateitemComponent,
    ManageorderComponent,
    AddorderComponent,
    UpdateorderComponent,
    ManagevisitingcardComponent,
    AddvisitingcardComponent,
    UpdatevisitingcardComponent,
    ManageenvelopsComponent,
    AddenvelopComponent,
    UpdateenvelopComponent,
    ManagelabelComponent,
    AddlabelComponent,
    UpdatelabelComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    FormsModule,
    MatIconModule,
    MatTableModule,
    MatButtonModule,
    MatRadioModule,
    MatInputModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSortModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    routes,
    MatSelectModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
