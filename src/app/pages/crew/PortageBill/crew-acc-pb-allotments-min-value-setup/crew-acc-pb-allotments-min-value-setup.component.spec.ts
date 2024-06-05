import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CREWACCPBAllotmentsMinValueSetupComponent } from './crew-acc-pb-allotments-min-value-setup.component';

describe('CREWACCPBAllotmentsMinValueSetupComponent', () => {
  let component: CREWACCPBAllotmentsMinValueSetupComponent;
  let fixture: ComponentFixture<CREWACCPBAllotmentsMinValueSetupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CREWACCPBAllotmentsMinValueSetupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CREWACCPBAllotmentsMinValueSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
