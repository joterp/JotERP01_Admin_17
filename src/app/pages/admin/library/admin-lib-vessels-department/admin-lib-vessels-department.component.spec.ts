import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLibVesselsDepartmentComponent } from './admin-lib-vessels-department.component';

describe('AdminLibVesselsDepartmentComponent', () => {
  let component: AdminLibVesselsDepartmentComponent;
  let fixture: ComponentFixture<AdminLibVesselsDepartmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminLibVesselsDepartmentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminLibVesselsDepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
