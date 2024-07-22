import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrmFinancialYearComponent } from './hrm-financial-year.component';

describe('HrmFinancialYearComponent', () => {
  let component: HrmFinancialYearComponent;
  let fixture: ComponentFixture<HrmFinancialYearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HrmFinancialYearComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HrmFinancialYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
