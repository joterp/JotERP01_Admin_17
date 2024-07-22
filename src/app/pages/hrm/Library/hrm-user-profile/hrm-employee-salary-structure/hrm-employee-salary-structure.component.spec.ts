import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrmEmployeeSalaryStructureComponent } from './hrm-employee-salary-structure.component';

describe('HrmEmployeeSalaryStructureComponent', () => {
  let component: HrmEmployeeSalaryStructureComponent;
  let fixture: ComponentFixture<HrmEmployeeSalaryStructureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HrmEmployeeSalaryStructureComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HrmEmployeeSalaryStructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
