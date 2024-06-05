import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OPSRPTFOLLOWUPINDEXComponent } from './ops-rpt-followup-index.component';

describe('OPSRPTFOLLOWUPINDEXComponent', () => {
  let component: OPSRPTFOLLOWUPINDEXComponent;
  let fixture: ComponentFixture<OPSRPTFOLLOWUPINDEXComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OPSRPTFOLLOWUPINDEXComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OPSRPTFOLLOWUPINDEXComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
