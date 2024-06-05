import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CREWVerifyCostDetailsModalComponent } from './crew-verify-cost-details-modal.component';

describe('CREWVerifyCostDetailsModalComponent', () => {
  let component: CREWVerifyCostDetailsModalComponent;
  let fixture: ComponentFixture<CREWVerifyCostDetailsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CREWVerifyCostDetailsModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CREWVerifyCostDetailsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
