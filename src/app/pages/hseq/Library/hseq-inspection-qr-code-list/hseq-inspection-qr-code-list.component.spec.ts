import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HseqInspectionQRCodeListComponent } from './hseq-inspection-qr-code-list.component';

describe('HseqInspectionQRCodeListComponent', () => {
  let component: HseqInspectionQRCodeListComponent;
  let fixture: ComponentFixture<HseqInspectionQRCodeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HseqInspectionQRCodeListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HseqInspectionQRCodeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
