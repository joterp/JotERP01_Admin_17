import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HseqVesselInspectionsLibItemAddComponent } from './hseq-vessel-inspections-lib-item-add.component';

describe('HseqVesselInspectionsLibItemAddComponent', () => {
  let component: HseqVesselInspectionsLibItemAddComponent;
  let fixture: ComponentFixture<HseqVesselInspectionsLibItemAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HseqVesselInspectionsLibItemAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HseqVesselInspectionsLibItemAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
