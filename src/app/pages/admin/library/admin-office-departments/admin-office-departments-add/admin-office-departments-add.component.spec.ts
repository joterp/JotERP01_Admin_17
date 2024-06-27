import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminOfficeDepartmentsAddComponent } from './admin-office-departments-add.component';

describe('AdminOfficeDepartmentsAddComponent', () => {
  let component: AdminOfficeDepartmentsAddComponent;
  let fixture: ComponentFixture<AdminOfficeDepartmentsAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminOfficeDepartmentsAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminOfficeDepartmentsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
