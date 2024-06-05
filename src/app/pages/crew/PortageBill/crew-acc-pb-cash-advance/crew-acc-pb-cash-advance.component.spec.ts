import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CREWACCPBCashAdvanceComponent } from './crew-acc-pb-cash-advance.component';

describe('CREWACCPBCashAdvanceComponent', () => {
  let component: CREWACCPBCashAdvanceComponent;
  let fixture: ComponentFixture<CREWACCPBCashAdvanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CREWACCPBCashAdvanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CREWACCPBCashAdvanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
