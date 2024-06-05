import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CREWSplitFeeModelComponent } from './crew-split-fee-model.component';

describe('CREWSplitFeeModelComponent', () => {
  let component: CREWSplitFeeModelComponent;
  let fixture: ComponentFixture<CREWSplitFeeModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CREWSplitFeeModelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CREWSplitFeeModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
