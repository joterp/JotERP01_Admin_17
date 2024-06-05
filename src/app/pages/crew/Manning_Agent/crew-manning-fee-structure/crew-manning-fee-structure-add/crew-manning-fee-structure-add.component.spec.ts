import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CREWManningFeeStructureAddComponent } from './crew-manning-fee-structure-add.component';

describe('CREWManningFeeStructureAddComponent', () => {
  let component: CREWManningFeeStructureAddComponent;
  let fixture: ComponentFixture<CREWManningFeeStructureAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CREWManningFeeStructureAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CREWManningFeeStructureAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
