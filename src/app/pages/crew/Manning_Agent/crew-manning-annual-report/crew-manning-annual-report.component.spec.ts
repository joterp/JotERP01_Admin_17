import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CREWManningAnnualReportComponent } from './crew-manning-annual-report.component';

describe('CREWManningAnnualReportComponent', () => {
  let component: CREWManningAnnualReportComponent;
  let fixture: ComponentFixture<CREWManningAnnualReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CREWManningAnnualReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CREWManningAnnualReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
