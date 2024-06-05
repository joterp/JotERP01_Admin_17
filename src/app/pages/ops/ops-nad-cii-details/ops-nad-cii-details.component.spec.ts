import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OPSNADCIIDetailsComponent } from './ops-nad-cii-details.component';

describe('OPSNADCIIDetailsComponent', () => {
  let component: OPSNADCIIDetailsComponent;
  let fixture: ComponentFixture<OPSNADCIIDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OPSNADCIIDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OPSNADCIIDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
