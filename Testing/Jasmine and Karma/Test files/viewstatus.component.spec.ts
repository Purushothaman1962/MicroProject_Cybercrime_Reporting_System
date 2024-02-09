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
import { ViewstatusComponent } from './viewstatus.component';




describe('View Status Component Test', () => {
  beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [ViewstatusComponent],
        imports:[HttpClientModule,ReactiveFormsModule,BrowserModule,
          AppRoutingModule,BrowserAnimationsModule,FormsModule ,ReactiveFormsModule, HttpClientModule,MatIconModule,MatButtonModule,MatToolbarModule
          ,MatFormFieldModule,MatTabsModule,MatInputModule,MatTooltipModule,MatCardModule,MatListModule,MatSidenavModule,MatToolbarModule, MatIconModule,
          MatSelectModule,MatButtonModule, MatDialogModule,MatFormFieldModule, MatInputModule, MatDatepickerModule,
          MatNativeDateModule, MatRadioModule, ReactiveFormsModule, FormsModule,
          HttpClientModule, MatTableModule, MatPaginatorModule, MatSortModule]
      }).compileComponents();
    });

it('To test the component created', () => {
  const fixture = TestBed.createComponent(ViewstatusComponent);
  const app = fixture.componentInstance;
  expect(app).toBeTruthy();
});

it(`should have as title 'View Status Component'`, () => {
  const fixture = TestBed.createComponent(ViewstatusComponent);
  const app = fixture.componentInstance;
  expect(app.title).toEqual('View Status Component');
});

/*
it('should render title', () => {
  const fixture = TestBed.createComponent(AppComponent);
  fixture.detectChanges();
  const compiled = fixture.nativeElement as HTMLElement;
  expect(compiled.querySelector('.content span')?.textContent).toContain('my-web-app4 app is running!');
}); */

it('View Status Component GUI count',()=>{
  const fixture = TestBed.createComponent(ViewstatusComponent);
  const formElement = fixture.debugElement.nativeElement.querySelector("#myForm");
  const inputElements = formElement.querySelectorAll("input");
  const inputElements1 = formElement.querySelectorAll("input");
  expect(inputElements.length).toEqual(1);
  expect(inputElements1.length).toEqual(1);
})

it('Login Complaint form initial value',() => {
  const fixture = TestBed.createComponent(ViewstatusComponent);
  const app = fixture.componentInstance;
  const myFormGroup = app.myForm;
  const myFormValues = {
    userName : ''
  }
  expect(myFormGroup.value).toEqual(myFormValues);
})

it('View status valid by valid data',() => {
  const fixture = TestBed.createComponent(ViewstatusComponent);
  const app = fixture.componentInstance;
  app.myForm.controls?.['userName'].setValue("Shiva");
  expect(app.myForm.valid).toBeTruthy();
})


it('View status valid by invalid data',() => {
  const fixture = TestBed.createComponent(ViewstatusComponent);
  const app = fixture.componentInstance;
  app.myForm.controls?.['userName'].setValue(" ");
  expect(app.myForm.valid).toBeFalsy();
})

});
