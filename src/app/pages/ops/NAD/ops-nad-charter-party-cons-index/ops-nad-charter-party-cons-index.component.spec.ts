import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OPSNADCHARTERPARTYCONSINDEXComponent } from './ops-nad-charter-party-cons-index.component';

describe('OPSNADCHARTERPARTYCONSINDEXComponent', () => {
  let component: OPSNADCHARTERPARTYCONSINDEXComponent;
  let fixture: ComponentFixture<OPSNADCHARTERPARTYCONSINDEXComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OPSNADCHARTERPARTYCONSINDEXComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OPSNADCHARTERPARTYCONSINDEXComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
