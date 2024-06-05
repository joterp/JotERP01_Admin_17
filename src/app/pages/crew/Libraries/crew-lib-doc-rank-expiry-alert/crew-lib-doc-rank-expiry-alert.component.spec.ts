import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CREWLIBDocRankExpiryAlertComponent } from './crew-lib-doc-rank-expiry-alert.component';

describe('CREWLIBDocRankExpiryAlertComponent', () => {
  let component: CREWLIBDocRankExpiryAlertComponent;
  let fixture: ComponentFixture<CREWLIBDocRankExpiryAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CREWLIBDocRankExpiryAlertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CREWLIBDocRankExpiryAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
