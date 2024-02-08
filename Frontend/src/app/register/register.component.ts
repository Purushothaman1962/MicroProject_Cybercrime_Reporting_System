import { Component } from '@angular/core';
import { User } from '../model/User';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from '../register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  user:User;
  myform:FormGroup;
  result:string=" ";
  flag:boolean=false;
 
  constructor(private service:RegisterService,private router:Router) {

    this.myform = new FormGroup(
      {
        userName: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]+')]),
        mobileNumber: new FormControl('', [Validators.required, Validators.pattern('[0-9]+')]),
        eMailId: new FormControl('', [Validators.required, Validators.pattern('')]),
        location: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]+')]),
        password:new FormControl('',[Validators.required,Validators.pattern('')]),
       
      }
    );
 
     this.user=new User();
  }


  insert(data:any){
   this.user.userName=data.userName;
   this.user.mobileNumber=data.mobileNumber;
   this.user.eMailId=data.eMailId;
   this.user.location=data.location;
   this.user.password=data.password;

   this.service.insert(this.user).subscribe({
      next :(res:any)=>{
        alert("User Registered Successfully");
      },
      error:()=>
      {
        alert("Can't able register the user!!");
      }
    });

//  alert(this.result=this.service.insert(this.user));

}

  changediv(){
    this.flag=!this.flag;
  }

  route(){
    this.router.navigate(['/Login'])
  }
}
