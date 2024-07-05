import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HseqLibVesselKpiAddCategoryComponent } from './hseq-lib-vessel-kpi-add-category.component';

describe('HseqLibVesselKpiAddCategoryComponent', () => {
  let component: HseqLibVesselKpiAddCategoryComponent;
  let fixture: ComponentFixture<HseqLibVesselKpiAddCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HseqLibVesselKpiAddCategoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HseqLibVesselKpiAddCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
