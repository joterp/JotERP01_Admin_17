import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CREWLIBDocRankExpiryAlertAddComponent } from './crew-lib-doc-rank-expiry-alert-add.component';

describe('CREWLIBDocRankExpiryAlertAddComponent', () => {
  let component: CREWLIBDocRankExpiryAlertAddComponent;
  let fixture: ComponentFixture<CREWLIBDocRankExpiryAlertAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CREWLIBDocRankExpiryAlertAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CREWLIBDocRankExpiryAlertAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
