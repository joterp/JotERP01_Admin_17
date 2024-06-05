import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CREWACCPBCaptainCashComponent } from './crew-acc-pb-captain-cash.component';

describe('CREWACCPBCaptainCashComponent', () => {
  let component: CREWACCPBCaptainCashComponent;
  let fixture: ComponentFixture<CREWACCPBCaptainCashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CREWACCPBCaptainCashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CREWACCPBCaptainCashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
