import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OPSLIBLUBESAMPLENAMEComponent } from './ops-lib-lube-sample-name.component';

describe('OPSLIBLUBESAMPLENAMEComponent', () => {
  let component: OPSLIBLUBESAMPLENAMEComponent;
  let fixture: ComponentFixture<OPSLIBLUBESAMPLENAMEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OPSLIBLUBESAMPLENAMEComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OPSLIBLUBESAMPLENAMEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
