import { Component, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ComplaintService } from '../complaint.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialogcomplaint',
  templateUrl: './dialogcomplaint.component.html',
  styleUrls: ['./dialogcomplaint.component.css']
})
export class DialogcomplaintComponent {

freshnessList = ["Brand New", "Second Hand", "Refurbished"];
productForm !: FormGroup;
actionBtn : string = "Save";


constructor(private formBuilder : FormBuilder,
  private api : ComplaintService,
  @Inject(MAT_DIALOG_DATA) public editData : any,
  private dialogRef : MatDialogRef<DialogcomplaintComponent>){




this.productForm = this.formBuilder.group({
  complaintId: new FormControl('', [Validators.required, Validators.pattern('[0-9]+')]),
  userName: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]+')]),
  complaintType: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]+')]),
  description: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]+')]),
  aadharCardNumber: new FormControl('', [Validators.required, Validators.pattern('[0-9]+')]),
  complaintStatus: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]+')]),
  });


  if(this.editData){
    this.actionBtn = "Update";
    this.productForm.controls['complaintId'].setValue(this.editData.complaintId);
    this.productForm.controls['userName'].setValue(this.editData.userName);
    this.productForm.controls['complaintType'].setValue(this.editData.complaintType);
    this.productForm.controls['description'].setValue(this.editData.description);
    this.productForm.controls['aadharCardNumber'].setValue(this.editData.aadharCardNumber);
    this.productForm.controls['complaintStatus'].setValue(this.editData.complaintStatus);
  }
}

  update(){
    this.api.updateComplaint(this.productForm.value, this.editData.complaintId)
    .subscribe({
      next :(res)=>{
        alert("Complaint Updated successfully");
        this.productForm.reset();
        this.dialogRef.close('update');
      },
      error:()=>
      {
        alert("Can't able to Update!!");
      }
    })
  }
}

