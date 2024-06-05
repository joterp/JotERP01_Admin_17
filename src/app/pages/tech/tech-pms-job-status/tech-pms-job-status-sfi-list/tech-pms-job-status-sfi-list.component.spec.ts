import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TECHPMSJobStatusSFIListComponent } from './tech-pms-job-status-sfi-list.component';



describe('TECHPMSJobStatusSFIListComponent', () => {
  let component: TECHPMSJobStatusSFIListComponent;
  let fixture: ComponentFixture<TECHPMSJobStatusSFIListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TECHPMSJobStatusSFIListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TECHPMSJobStatusSFIListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
