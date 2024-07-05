import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HseqLibVesselKpiAddObjectivesComponent } from './hseq-lib-vessel-kpi-add-objectives.component';

describe('HseqLibVesselKpiAddObjectivesComponent', () => {
  let component: HseqLibVesselKpiAddObjectivesComponent;
  let fixture: ComponentFixture<HseqLibVesselKpiAddObjectivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HseqLibVesselKpiAddObjectivesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HseqLibVesselKpiAddObjectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
