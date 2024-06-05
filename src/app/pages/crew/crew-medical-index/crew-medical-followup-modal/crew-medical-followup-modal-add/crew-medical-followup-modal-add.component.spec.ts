import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CREWMedicalFollowupModalAddComponent } from './crew-medical-followup-modal-add.component';

describe('CREWMedicalFollowupModalAddComponent', () => {
  let component: CREWMedicalFollowupModalAddComponent;
  let fixture: ComponentFixture<CREWMedicalFollowupModalAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CREWMedicalFollowupModalAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CREWMedicalFollowupModalAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
