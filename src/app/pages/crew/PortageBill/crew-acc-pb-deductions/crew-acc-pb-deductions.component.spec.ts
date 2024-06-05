import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CREWACCPBDeductionsComponent } from './crew-acc-pb-deductions.component';

describe('CREWACCPBDeductionsComponent', () => {
  let component: CREWACCPBDeductionsComponent;
  let fixture: ComponentFixture<CREWACCPBDeductionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CREWACCPBDeductionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CREWACCPBDeductionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
