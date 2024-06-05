import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OPSNADLIBCO2PERMITSComponent } from './ops-nad-lib-co2-permits.component';

describe('OPSNADLIBCO2PERMITSComponent', () => {
  let component: OPSNADLIBCO2PERMITSComponent;
  let fixture: ComponentFixture<OPSNADLIBCO2PERMITSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OPSNADLIBCO2PERMITSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OPSNADLIBCO2PERMITSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
