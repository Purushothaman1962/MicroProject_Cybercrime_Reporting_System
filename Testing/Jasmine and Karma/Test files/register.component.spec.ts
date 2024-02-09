import { ComponentFixture, TestBed } from '@angular/core/testing';

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
import { RegisterComponent } from './register.component';



describe('Register form Component Test', () => {
  beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [RegisterComponent],
        imports:[HttpClientModule,ReactiveFormsModule,BrowserModule,
          AppRoutingModule,BrowserAnimationsModule,FormsModule ,ReactiveFormsModule, HttpClientModule,MatIconModule,MatButtonModule,MatToolbarModule
          ,MatFormFieldModule,MatTabsModule,MatInputModule,MatTooltipModule,MatCardModule,MatListModule,MatSidenavModule,MatToolbarModule, MatIconModule,
          MatSelectModule,MatButtonModule, MatDialogModule,MatFormFieldModule, MatInputModule, MatDatepickerModule,
          MatNativeDateModule, MatRadioModule, ReactiveFormsModule, FormsModule,
          HttpClientModule, MatTableModule, MatPaginatorModule, MatSortModule]
      }).compileComponents();
    });

it('To test the component created', () => {
  const fixture = TestBed.createComponent(RegisterComponent);
  const app = fixture.componentInstance;
  expect(app).toBeTruthy();
});

it(`should have as title 'Register Form Component'`, () => {
  const fixture = TestBed.createComponent(RegisterComponent);
  const app = fixture.componentInstance;
  expect(app.title).toEqual('Register Component');
});

/*
it('should render title', () => {
  const fixture = TestBed.createComponent(AppComponent);
  fixture.detectChanges();
  const compiled = fixture.nativeElement as HTMLElement;
  expect(compiled.querySelector('.content span')?.textContent).toContain('my-web-app4 app is running!');
}); */

it('Register form Component GUI count',()=>{
  const fixture = TestBed.createComponent(RegisterComponent);
  const formElement = fixture.debugElement.nativeElement.querySelector("#myform");
  const inputElements = formElement.querySelectorAll("input");
  const inputElements1 = formElement.querySelectorAll("button");
  expect(inputElements.length).toEqual(5);
  expect(inputElements1.length).toEqual(1);
})

it('Register form initial value',() => {
  const fixture = TestBed.createComponent(RegisterComponent);
  const app = fixture.componentInstance;
  const myFormGroup = app.myform;
  const myFormValues = {
    userName : '',
    mobileNumber : '',
    eMailId : '',
    password : '',
    location : ''
  }
  expect(myFormGroup.value).toEqual(myFormValues);
})

it('Register form valid by valid data',() => {
  const fixture = TestBed.createComponent(RegisterComponent);
  const app = fixture.componentInstance;
  app.myform.controls?.['userName'].setValue("Dom");
  app.myform.controls?.['mobileNumber'].setValue("9647234567");
  app.myform.controls?.['eMailId'].setValue("dom@gmail.com");
  app.myform.controls?.['password'].setValue("dom@123");
  app.myform.controls?.['location'].setValue("Trichy");
  expect(app.myform.valid).toBeTruthy();
})

it('Register form valid by invalid data',() => {
  const fixture = TestBed.createComponent(RegisterComponent);
  const app = fixture.componentInstance;
  app.myform.controls?.['userName'].setValue(" ");
  app.myform.controls?.['mobileNumber'].setValue(" ");
  app.myform.controls?.['eMailId'].setValue(" ");
  app.myform.controls?.['password'].setValue(" ");
  app.myform.controls?.['location'].setValue(" ");
  expect(app.myform.valid).toBeFalsy();
})




});
