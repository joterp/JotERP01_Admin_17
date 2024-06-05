import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OPSNADCHARTERPARTYACTIVITYComponent } from './ops-nad-charter-party-activity.component';

describe('OPSNADCHARTERPARTYACTIVITYComponent', () => {
  let component: OPSNADCHARTERPARTYACTIVITYComponent;
  let fixture: ComponentFixture<OPSNADCHARTERPARTYACTIVITYComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OPSNADCHARTERPARTYACTIVITYComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OPSNADCHARTERPARTYACTIVITYComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
