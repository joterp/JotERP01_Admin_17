import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CREWACCPBEarnDeductionIndexComponent } from './crew-acc-pb-earn-deduction-index.component';

describe('CREWACCPBEarnDeductionIndexComponent', () => {
  let component: CREWACCPBEarnDeductionIndexComponent;
  let fixture: ComponentFixture<CREWACCPBEarnDeductionIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CREWACCPBEarnDeductionIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CREWACCPBEarnDeductionIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
