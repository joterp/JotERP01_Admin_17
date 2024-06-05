import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OPSNADCIIDetailsAddComponent } from './ops-nad-cii-details-add.component';

describe('OPSNADCIIDetailsAddComponent', () => {
  let component: OPSNADCIIDetailsAddComponent;
  let fixture: ComponentFixture<OPSNADCIIDetailsAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OPSNADCIIDetailsAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OPSNADCIIDetailsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
