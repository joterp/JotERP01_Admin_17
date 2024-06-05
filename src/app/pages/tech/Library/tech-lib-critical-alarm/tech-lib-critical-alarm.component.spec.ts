import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TECHLIBCRITICALALARMComponent } from './tech-lib-critical-alarm.component';

describe('TECHLIBCRITICALALARMComponent', () => {
  let component: TECHLIBCRITICALALARMComponent;
  let fixture: ComponentFixture<TECHLIBCRITICALALARMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TECHLIBCRITICALALARMComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TECHLIBCRITICALALARMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
