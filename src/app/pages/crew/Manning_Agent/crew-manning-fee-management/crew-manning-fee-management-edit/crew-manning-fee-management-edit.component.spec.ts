import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CREWManningFeeManagementEditComponent } from './crew-manning-fee-management-edit.component';

describe('CREWManningFeeManagementEditComponent', () => {
  let component: CREWManningFeeManagementEditComponent;
  let fixture: ComponentFixture<CREWManningFeeManagementEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CREWManningFeeManagementEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CREWManningFeeManagementEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
