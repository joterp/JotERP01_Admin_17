import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CREWFeedbackRemarkAddModalComponent } from './crew-feedback-remark-add-modal.component';

describe('CREWFeedbackRemarkAddModalComponent', () => {
  let component: CREWFeedbackRemarkAddModalComponent;
  let fixture: ComponentFixture<CREWFeedbackRemarkAddModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CREWFeedbackRemarkAddModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CREWFeedbackRemarkAddModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
