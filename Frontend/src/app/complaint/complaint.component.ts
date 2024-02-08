import { Component } from '@angular/core';
import { Complaint } from '../model/Complaint';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ComplaintService } from '../complaint.service';

@Component({
  selector: 'app-complaint',
  templateUrl: './complaint.component.html',
  styleUrls: ['./complaint.component.css']
})
export class ComplaintComponent {

  complaint:Complaint;
  myForm:FormGroup;
  result:string=" ";
 
  constructor(private service:ComplaintService) {

    this.myForm = new FormGroup(
      {
        userName: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]+')]),
        complaintType: new FormControl('', [Validators.required, Validators.pattern('')]),
        description: new FormControl('', [Validators.required, Validators.pattern('')]),
        aadharCardNumber: new FormControl('', [Validators.required, Validators.pattern('[0-9]+')]),
       
      }
    );
 
     this.complaint=new Complaint();
  }


  registerComplaint(data:any){
   this.complaint.userName=data.userName;
   this.complaint.complaintType=data.complaintType;
   this.complaint.description=data.description;
   this.complaint.aadharCardNumber=data.aadharCardNumber;

   this.service.insertComplaint(this.complaint).subscribe(
    {
      next :(res)=>{
        alert("Complaint Registered Successfully");
      },
      error:()=>
      {
        alert("The user is not a registered user!!");
      }
    })

  }



}
