import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HseqVesselInspectionsLibTypeAddComponent } from './hseq-vessel-inspections-lib-type-add.component';

describe('HseqVesselInspectionsLibTypeAddComponent', () => {
  let component: HseqVesselInspectionsLibTypeAddComponent;
  let fixture: ComponentFixture<HseqVesselInspectionsLibTypeAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HseqVesselInspectionsLibTypeAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HseqVesselInspectionsLibTypeAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
