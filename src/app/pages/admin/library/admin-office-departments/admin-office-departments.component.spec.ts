import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminOfficeDepartmentsComponent } from './admin-office-departments.component';

describe('AdminOfficeDepartmentsComponent', () => {
  let component: AdminOfficeDepartmentsComponent;
  let fixture: ComponentFixture<AdminOfficeDepartmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminOfficeDepartmentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminOfficeDepartmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
