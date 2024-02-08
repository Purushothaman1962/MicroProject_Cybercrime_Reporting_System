import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogcomplaintComponent } from './dialogcomplaint.component';

describe('DialogcomplaintComponent', () => {
  let component: DialogcomplaintComponent;
  let fixture: ComponentFixture<DialogcomplaintComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogcomplaintComponent]
    });
    fixture = TestBed.createComponent(DialogcomplaintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
