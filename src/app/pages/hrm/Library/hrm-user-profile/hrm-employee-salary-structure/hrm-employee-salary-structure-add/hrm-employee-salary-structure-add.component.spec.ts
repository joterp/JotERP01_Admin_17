import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrmEmployeeSalaryStructureAddComponent } from './hrm-employee-salary-structure-add.component';

describe('HrmEmployeeSalaryStructureAddComponent', () => {
  let component: HrmEmployeeSalaryStructureAddComponent;
  let fixture: ComponentFixture<HrmEmployeeSalaryStructureAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HrmEmployeeSalaryStructureAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HrmEmployeeSalaryStructureAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
