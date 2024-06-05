import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CREWMedicalFollowupModalComponent } from './crew-medical-followup-modal.component';

describe('CREWMedicalFollowupModalComponent', () => {
  let component: CREWMedicalFollowupModalComponent;
  let fixture: ComponentFixture<CREWMedicalFollowupModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CREWMedicalFollowupModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CREWMedicalFollowupModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
