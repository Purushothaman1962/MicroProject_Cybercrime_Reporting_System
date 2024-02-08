import { Component } from '@angular/core';
import { Complaint } from '../model/Complaint';
import { ComplaintService } from '../complaint.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-viewstatus',
  templateUrl: './viewstatus.component.html',
  styleUrls: ['./viewstatus.component.css']
})
export class ViewstatusComponent {

  complaint:Complaint;
  myForm:FormGroup;
  result:string=" ";
  complaintList:Complaint[]=[];
  flag:boolean=false;


  constructor(private service:ComplaintService) {

    this.myForm = new FormGroup(
      {
        userName: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]+')]),
      }
    );
 
    this.complaint=new Complaint();
  }


  get(data:any){
    this.complaint.userName=data.userName;
    this.service.getDetails(this.complaint).subscribe(complains => this.complaintList = complains);
   }

   changediv(){
    this.flag=!this.flag;
   }
}
