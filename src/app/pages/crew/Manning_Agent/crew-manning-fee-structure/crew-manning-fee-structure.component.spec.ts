import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CREWManningFeeStructureComponent } from './crew-manning-fee-structure.component';

describe('CREWManningFeeStructureComponent', () => {
  let component: CREWManningFeeStructureComponent;
  let fixture: ComponentFixture<CREWManningFeeStructureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CREWManningFeeStructureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CREWManningFeeStructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
