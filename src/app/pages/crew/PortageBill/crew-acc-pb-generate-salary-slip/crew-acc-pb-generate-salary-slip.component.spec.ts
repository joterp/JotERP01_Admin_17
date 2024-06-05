import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CREWACCPBGenerateSalarySlipComponent } from './crew-acc-pb-generate-salary-slip.component';

describe('CREWACCPBGenerateSalarySlipComponent', () => {
  let component: CREWACCPBGenerateSalarySlipComponent;
  let fixture: ComponentFixture<CREWACCPBGenerateSalarySlipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CREWACCPBGenerateSalarySlipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CREWACCPBGenerateSalarySlipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
