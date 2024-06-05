import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CREWACCPBAllotmentsMinValueSetupAddComponent } from './crew-acc-pb-allotments-min-value-setup-add.component';

describe('CREWACCPBAllotmentsMinValueSetupAddComponent', () => {
  let component: CREWACCPBAllotmentsMinValueSetupAddComponent;
  let fixture: ComponentFixture<CREWACCPBAllotmentsMinValueSetupAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CREWACCPBAllotmentsMinValueSetupAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CREWACCPBAllotmentsMinValueSetupAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
