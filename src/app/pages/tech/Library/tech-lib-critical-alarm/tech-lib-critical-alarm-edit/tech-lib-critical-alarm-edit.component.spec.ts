import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TECHLIBCRITICALALARMEditComponent } from './tech-lib-critical-alarm-edit.component';

describe('TECHLIBCRITICALALARMEditComponent', () => {
  let component: TECHLIBCRITICALALARMEditComponent;
  let fixture: ComponentFixture<TECHLIBCRITICALALARMEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TECHLIBCRITICALALARMEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TECHLIBCRITICALALARMEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
