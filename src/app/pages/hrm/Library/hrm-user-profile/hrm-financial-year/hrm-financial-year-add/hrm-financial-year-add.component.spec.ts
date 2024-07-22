import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrmFinancialYearAddComponent } from './hrm-financial-year-add.component';

describe('HrmFinancialYearAddComponent', () => {
  let component: HrmFinancialYearAddComponent;
  let fixture: ComponentFixture<HrmFinancialYearAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HrmFinancialYearAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HrmFinancialYearAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
