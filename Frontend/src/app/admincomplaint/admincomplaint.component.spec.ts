import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmincomplaintComponent } from './admincomplaint.component';

describe('AdmincomplaintComponent', () => {
  let component: AdmincomplaintComponent;
  let fixture: ComponentFixture<AdmincomplaintComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdmincomplaintComponent]
    });
    fixture = TestBed.createComponent(AdmincomplaintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
