import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CREWACCPBCaptainCashDetailComponent } from './crew-acc-pb-captain-cash-detail.component';

describe('CREWACCPBCaptainCashDetailComponent', () => {
  let component: CREWACCPBCaptainCashDetailComponent;
  let fixture: ComponentFixture<CREWACCPBCaptainCashDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CREWACCPBCaptainCashDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CREWACCPBCaptainCashDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
