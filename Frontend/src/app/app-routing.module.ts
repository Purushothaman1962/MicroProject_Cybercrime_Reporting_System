import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ComplaintComponent } from './complaint/complaint.component';
import { AdmincomplaintComponent } from './admincomplaint/admincomplaint.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { ViewstatusComponent } from './viewstatus/viewstatus.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path :'Register',component:RegisterComponent},
  {path :'Register/Login',component:RegisterComponent},
  {path :'Login',component:LoginComponent},
  {path :'Login/Register',component:LoginComponent},
  {path :'Complaint',component:ComplaintComponent},
  {path :'User/Complaint',component:ComplaintComponent},
  {path :'Admin',component:AdminComponent},
  {path :'AdminComplaint',component:AdmincomplaintComponent},
  {path :'Admin/AdminComplaint',component:AdmincomplaintComponent},
  {path :'UserDetails',component:UserdetailsComponent},
  {path :'Admin/UserDetails',component:UserdetailsComponent},
  {path :'ViewStatus',component:ViewstatusComponent},
  {path :'User/ViewStatus',component:ViewstatusComponent},
  {path :'User',component:UserComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 


}
