import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OPSNADLIBDOCUMENTSComponent } from './ops-nad-lib-documents.component';

describe('OPSNADLIBDOCUMENTSComponent', () => {
  let component: OPSNADLIBDOCUMENTSComponent;
  let fixture: ComponentFixture<OPSNADLIBDOCUMENTSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OPSNADLIBDOCUMENTSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OPSNADLIBDOCUMENTSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
