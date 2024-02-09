import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplaintComponent } from './complaint.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';




import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import {MatListModule} from '@angular/material/list';




import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatRadioModule} from '@angular/material/radio';



import { Routes,RouterModule } from '@angular/router';


import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { AppRoutingModule } from '../app-routing.module';
import { MatTabsModule } from '@angular/material/tabs';



describe('Register Complaint Component Test', () => {
  beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [ComplaintComponent],
        imports:[HttpClientModule,ReactiveFormsModule,BrowserModule,
          AppRoutingModule,BrowserAnimationsModule,FormsModule ,ReactiveFormsModule, HttpClientModule,MatIconModule,MatButtonModule,MatToolbarModule
          ,MatFormFieldModule,MatTabsModule,MatInputModule,MatTooltipModule,MatCardModule,MatListModule,MatSidenavModule,MatToolbarModule, MatIconModule,
          MatSelectModule,MatButtonModule, MatDialogModule,MatFormFieldModule, MatInputModule, MatDatepickerModule,
          MatNativeDateModule, MatRadioModule, ReactiveFormsModule, FormsModule,
          HttpClientModule, MatTableModule, MatPaginatorModule, MatSortModule]
      }).compileComponents();
    });

it('To test the component created', () => {
  const fixture = TestBed.createComponent(ComplaintComponent);
  const app = fixture.componentInstance;
  expect(app).toBeTruthy();
});

it(`should have as title 'Complaint Component'`, () => {
  const fixture = TestBed.createComponent(ComplaintComponent);
  const app = fixture.componentInstance;
  expect(app.title).toEqual('Complaint Component');
});

/*
it('should render title', () => {
  const fixture = TestBed.createComponent(AppComponent);
  fixture.detectChanges();
  const compiled = fixture.nativeElement as HTMLElement;
  expect(compiled.querySelector('.content span')?.textContent).toContain('my-web-app4 app is running!');
}); */

it('Complaint Component GUI count',()=>{
  const fixture = TestBed.createComponent(ComplaintComponent);
  const formElement = fixture.debugElement.nativeElement.querySelector("#myForm");
  const inputElements = formElement.querySelectorAll("input");
  const inputElements1 = formElement.querySelectorAll("textarea");
  expect(inputElements.length).toEqual(2);
  expect(inputElements1.length).toEqual(1);
})

it('Register Complaint form initial value',() => {
  const fixture = TestBed.createComponent(ComplaintComponent);
  const app = fixture.componentInstance;
  const myFormGroup = app.myForm;
  const myFormValues = {
    userName : '',
    complaintType : '',
    description : '',
    aadharCardNumber : ''
  }
  expect(myFormGroup.value).toEqual(myFormValues);
})

it('Register Complaint form valid by valid data',() => {
  const fixture = TestBed.createComponent(ComplaintComponent);
  const app = fixture.componentInstance;
  app.myForm.controls?.['userName'].setValue("Magesh");
  app.myForm.controls?.['complaintType'].setValue("General");
  app.myForm.controls?.['description'].setValue("Data theft");
  app.myForm.controls?.['aadharCardNumber'].setValue("678923456789");
  expect(app.myForm.valid).toBeTruthy();
})


it('Register Complaint form valid by invalid data',() => {
  const fixture = TestBed.createComponent(ComplaintComponent);
  const app = fixture.componentInstance;
  app.myForm.controls?.['userName'].setValue(" ");
  app.myForm.controls?.['complaintType'].setValue(" ");
  app.myForm.controls?.['description'].setValue(" ");
  app.myForm.controls?.['aadharCardNumber'].setValue(" ");
  expect(app.myForm.valid).toBeFalsy();
})



});
