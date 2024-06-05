import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CREWACCPBEarningsComponent } from './crew-acc-pb-earnings.component';

describe('CREWACCPBEarningsComponent', () => {
  let component: CREWACCPBEarningsComponent;
  let fixture: ComponentFixture<CREWACCPBEarningsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CREWACCPBEarningsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CREWACCPBEarningsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
