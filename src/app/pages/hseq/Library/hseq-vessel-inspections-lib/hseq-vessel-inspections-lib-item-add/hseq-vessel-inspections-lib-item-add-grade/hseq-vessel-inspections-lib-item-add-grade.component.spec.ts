import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HseqVesselInspectionsLibItemAddGradeComponent } from './hseq-vessel-inspections-lib-item-add-grade.component';

describe('HseqVesselInspectionsLibItemAddGradeComponent', () => {
  let component: HseqVesselInspectionsLibItemAddGradeComponent;
  let fixture: ComponentFixture<HseqVesselInspectionsLibItemAddGradeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HseqVesselInspectionsLibItemAddGradeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HseqVesselInspectionsLibItemAddGradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
