import { Component, NgModule } from '@angular/core';
import { User } from '../model/User';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from '../register.service';
import { Router, RouterModule, Routes } from '@angular/router';
import { Resultdata } from '../model/Resultdata';
import { RegisterComponent } from '../register/register.component';
import { ComplaintComponent } from '../complaint/complaint.component';
import { AdmincomplaintComponent } from '../admincomplaint/admincomplaint.component';
import { UserdetailsComponent } from '../userdetails/userdetails.component';
import { ViewstatusComponent } from '../viewstatus/viewstatus.component';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {

  user:User;
  myform:FormGroup;
  flag:boolean=false;
 
  constructor(private service:RegisterService,private router:Router) {

    this.myform = new FormGroup(
      {
        userName: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]+')]),
        password:new FormControl('',[Validators.required,Validators.pattern('')]), 
      }
    );
 
     this.user=new User();
  }


  login (data:any){
   this.user.userName=data.userName;
   this.user.password=data.password;

  this.service.login(this.user).subscribe(
    (resultdata:any)=> {
      console.log(resultdata)

      if(resultdata.message=="Admin Success"){
         this.router.navigate(['/UserDetails']);
      } else if(resultdata.message=="User Success"){
        this.router.navigate(['/User']);
      }
      else{
        alert("Invalid User");
      }
    }
   );
  }

  changediv(){
    this.flag=!this.flag;
  }

  route(){
    this.router.navigate(['/Register'])
  }

}
