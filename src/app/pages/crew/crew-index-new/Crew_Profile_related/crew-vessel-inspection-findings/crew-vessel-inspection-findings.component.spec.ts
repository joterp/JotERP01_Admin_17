import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CREWVesselInspectionFindingsComponent } from './crew-vessel-inspection-findings.component';

describe('CREWVesselInspectionFindingsComponent', () => {
  let component: CREWVesselInspectionFindingsComponent;
  let fixture: ComponentFixture<CREWVesselInspectionFindingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CREWVesselInspectionFindingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CREWVesselInspectionFindingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
