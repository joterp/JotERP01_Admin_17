import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OpsRptAddReportEditComponent } from './ops-rpt-add-report-edit.component';



describe('OpsRptAddReportEditComponent', () => {
  let component: OpsRptAddReportEditComponent;
  let fixture: ComponentFixture<OpsRptAddReportEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpsRptAddReportEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpsRptAddReportEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
