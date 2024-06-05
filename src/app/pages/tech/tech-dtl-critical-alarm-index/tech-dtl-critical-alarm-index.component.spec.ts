import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TECHDTLCRITICALALARMINDEXComponent } from './tech-dtl-critical-alarm-index.component';

describe('TECHDTLCRITICALALARMINDEXComponent', () => {
  let component: TECHDTLCRITICALALARMINDEXComponent;
  let fixture: ComponentFixture<TECHDTLCRITICALALARMINDEXComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TECHDTLCRITICALALARMINDEXComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TECHDTLCRITICALALARMINDEXComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
