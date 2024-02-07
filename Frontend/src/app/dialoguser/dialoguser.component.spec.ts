import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialoguserComponent } from './dialoguser.component';

describe('DialoguserComponent', () => {
  let component: DialoguserComponent;
  let fixture: ComponentFixture<DialoguserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialoguserComponent]
    });
    fixture = TestBed.createComponent(DialoguserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
