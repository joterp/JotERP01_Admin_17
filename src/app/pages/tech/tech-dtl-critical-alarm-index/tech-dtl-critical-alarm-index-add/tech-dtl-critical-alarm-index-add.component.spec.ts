import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TECHDTLCRITICALALARMINDEXAddComponent } from './tech-dtl-critical-alarm-index-add.component';

describe('TECHDTLCRITICALALARMINDEXAddComponent', () => {
  let component: TECHDTLCRITICALALARMINDEXAddComponent;
  let fixture: ComponentFixture<TECHDTLCRITICALALARMINDEXAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TECHDTLCRITICALALARMINDEXAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TECHDTLCRITICALALARMINDEXAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
