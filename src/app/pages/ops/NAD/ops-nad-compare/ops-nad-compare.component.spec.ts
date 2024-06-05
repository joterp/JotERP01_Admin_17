import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OPSNADCompareComponent } from './ops-nad-compare.component';

describe('OPSNADCompareComponent', () => {
  let component: OPSNADCompareComponent;
  let fixture: ComponentFixture<OPSNADCompareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OPSNADCompareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OPSNADCompareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
