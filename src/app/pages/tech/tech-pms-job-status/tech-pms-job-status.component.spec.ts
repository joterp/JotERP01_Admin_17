import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TECHPMSJobStatusComponent } from './tech-pms-job-status.component';


describe('TECHPMSJobStatusComponent', () => {
  let component: TECHPMSJobStatusComponent;
  let fixture: ComponentFixture<TECHPMSJobStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TECHPMSJobStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TECHPMSJobStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
