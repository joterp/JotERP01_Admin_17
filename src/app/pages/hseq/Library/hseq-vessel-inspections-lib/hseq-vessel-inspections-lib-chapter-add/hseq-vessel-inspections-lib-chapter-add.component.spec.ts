import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HseqVesselInspectionsLibChapterAddComponent } from './hseq-vessel-inspections-lib-chapter-add.component';

describe('HseqVesselInspectionsLibChapterAddComponent', () => {
  let component: HseqVesselInspectionsLibChapterAddComponent;
  let fixture: ComponentFixture<HseqVesselInspectionsLibChapterAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HseqVesselInspectionsLibChapterAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HseqVesselInspectionsLibChapterAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
