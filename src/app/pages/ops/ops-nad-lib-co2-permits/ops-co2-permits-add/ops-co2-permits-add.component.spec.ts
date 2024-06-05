import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OPSCO2PERMITSADDComponent } from './ops-co2-permits-add.component';

describe('OPSCO2PERMITSADDComponent', () => {
  let component: OPSCO2PERMITSADDComponent;
  let fixture: ComponentFixture<OPSCO2PERMITSADDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OPSCO2PERMITSADDComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OPSCO2PERMITSADDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
