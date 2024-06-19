import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLibVesselsDepartmentAddComponent } from './admin-lib-vessels-department-add.component';

describe('AdminLibVesselsDepartmentAddComponent', () => {
  let component: AdminLibVesselsDepartmentAddComponent;
  let fixture: ComponentFixture<AdminLibVesselsDepartmentAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminLibVesselsDepartmentAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminLibVesselsDepartmentAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
