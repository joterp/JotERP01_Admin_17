import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CREWACCPBCashAdvanceDetailComponent } from './crew-acc-pb-cash-advance-detail.component';

describe('CREWACCPBCashAdvanceDetailComponent', () => {
  let component: CREWACCPBCashAdvanceDetailComponent;
  let fixture: ComponentFixture<CREWACCPBCashAdvanceDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CREWACCPBCashAdvanceDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CREWACCPBCashAdvanceDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
