import { Component, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from '../register.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialoguser',
  templateUrl: './dialoguser.component.html',
  styleUrls: ['./dialoguser.component.css']
})
export class DialoguserComponent {

  freshnessList = ["Brand New", "Second Hand", "Refurbished"];
productForm !: FormGroup;
actionBtn : string = "Save";


constructor(private formBuilder : FormBuilder,
  private api : RegisterService,
  @Inject(MAT_DIALOG_DATA) public editData : any,
  private dialogRef : MatDialogRef<DialoguserComponent>){




this.productForm = this.formBuilder.group({
  userId: new FormControl('', [Validators.required, Validators.pattern('[0-9]+')]),
  userName: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]+')]),
  userType: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]+')]),
  mobileNumber: new FormControl('', [Validators.required, Validators.pattern('[0-9]+')]),
  eMailId: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]+')]),
  location: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]+')]),
  password: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]+')]),
  });


  if(this.editData){
    this.actionBtn = "Update";
    this.productForm.controls['userId'].setValue(this.editData.userId);
    this.productForm.controls['userName'].setValue(this.editData.userName);
    this.productForm.controls['userType'].setValue(this.editData.userType);
    this.productForm.controls['mobileNumber'].setValue(this.editData.mobileNumber);
    this.productForm.controls['eMailId'].setValue(this.editData.eMailId);
    this.productForm.controls['location'].setValue(this.editData.location);
    this.productForm.controls['password'].setValue(this.editData.password);
  }
}

  updateProduct(){
    this.api.updateUser(this.productForm.value, this.editData.userId)
    .subscribe({
      next :(res)=>{
        alert("Product updated Successfully");
        this.productForm.reset();
        this.dialogRef.close('update');
      },
      error:()=>
      {
        alert("error while updating the record!!");
      }
    })
  }
}