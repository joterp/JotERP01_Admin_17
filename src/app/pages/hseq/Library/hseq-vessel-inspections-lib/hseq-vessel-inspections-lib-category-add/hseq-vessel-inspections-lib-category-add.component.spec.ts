import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HseqVesselInspectionsLibCategoryAddComponent } from './hseq-vessel-inspections-lib-category-add.component';

describe('HseqVesselInspectionsLibCategoryAddComponent', () => {
  let component: HseqVesselInspectionsLibCategoryAddComponent;
  let fixture: ComponentFixture<HseqVesselInspectionsLibCategoryAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HseqVesselInspectionsLibCategoryAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HseqVesselInspectionsLibCategoryAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
