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
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { AppRoutingModule } from '../app-routing.module';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDialogModule, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DialoguserComponent } from './dialoguser.component';



describe('Dialog User Component Test', () => {
  beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [DialoguserComponent],
        imports:[HttpClientModule,ReactiveFormsModule,BrowserModule,
          AppRoutingModule,BrowserAnimationsModule,FormsModule ,ReactiveFormsModule, HttpClientModule,MatIconModule,MatButtonModule,MatToolbarModule
          ,MatFormFieldModule,MatTabsModule,MatInputModule,MatTooltipModule,MatCardModule,MatListModule,MatSidenavModule,MatToolbarModule, MatIconModule,
          MatSelectModule,MatButtonModule, MatDialogModule,MatFormFieldModule, MatInputModule, MatDatepickerModule,
          MatNativeDateModule, MatRadioModule, ReactiveFormsModule, FormsModule,
          HttpClientModule, MatTableModule, MatPaginatorModule, MatSortModule],
          providers: [
            { provide: MAT_DIALOG_DATA, useValue: {} },
            { provide: MatDialogRef, useValue: {} }
          ]
      }).compileComponents();
    });

it('To test the component created', () => {
  const fixture = TestBed.createComponent(DialoguserComponent);
  const app = fixture.componentInstance;
  expect(app).toBeTruthy();
});

it(`should have as title 'Dialog User Component'`, () => {
  const fixture = TestBed.createComponent(DialoguserComponent);
  const app = fixture.componentInstance;
  expect(app.title).toEqual('Dialog User Component');
});

/*
it('should render title', () => {
  const fixture = TestBed.createComponent(AppComponent);
  fixture.detectChanges();
  const compiled = fixture.nativeElement as HTMLElement;
  expect(compiled.querySelector('.content span')?.textContent).toContain('my-web-app4 app is running!');
}); */

it('Dialog User Component GUI count',()=>{
  const fixture = TestBed.createComponent(DialoguserComponent);
  const formElement = fixture.debugElement.nativeElement.querySelector("#productForm");
  const inputElements = formElement.querySelectorAll("input");
  expect(inputElements.length).toEqual(5);
})

it('Dialog User form valid by valid data',() => {
  const fixture = TestBed.createComponent(DialoguserComponent);
  const app = fixture.componentInstance;
  app.productForm.controls?.['userId'].setValue("1033");
  app.productForm.controls?.['userName'].setValue("Dom");
  app.productForm.controls?.['mobileNumber'].setValue("9647234567");
  app.productForm.controls?.['eMailId'].setValue("dom@gmail.com");
  app.productForm.controls?.['location'].setValue("Trichy");
  expect(app.productForm.valid).toBeFalsy();
})


it('Dialog User form valid by invalid data',() => {
  const fixture = TestBed.createComponent(DialoguserComponent);
  const app = fixture.componentInstance;
  app.productForm.controls?.['userId'].setValue(" ");
  app.productForm.controls?.['userName'].setValue(" ");
  app.productForm.controls?.['mobileNumber'].setValue(" ");
  app.productForm.controls?.['eMailId'].setValue(" ");
  app.productForm.controls?.['location'].setValue(" ");
  expect(app.productForm.valid).toBeFalsy();
})

});
