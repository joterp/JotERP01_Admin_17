import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TECHPMSJobStatusEditComponent } from './tech-pms-job-status-edit.component';

describe('TECHPMSJobStatusEditComponent', () => {
  let component: TECHPMSJobStatusEditComponent;
  let fixture: ComponentFixture<TECHPMSJobStatusEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TECHPMSJobStatusEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TECHPMSJobStatusEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
