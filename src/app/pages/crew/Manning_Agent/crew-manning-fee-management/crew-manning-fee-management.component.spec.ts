import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CREWManningFeeManagementComponent } from './crew-manning-fee-management.component';

describe('CREWManningFeeManagementComponent', () => {
  let component: CREWManningFeeManagementComponent;
  let fixture: ComponentFixture<CREWManningFeeManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CREWManningFeeManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CREWManningFeeManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
