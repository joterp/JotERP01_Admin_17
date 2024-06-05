import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CREWFeedbackRemarkComponent } from './crew-feedback-remark.component';

describe('CREWFeedbackRemarkComponent', () => {
  let component: CREWFeedbackRemarkComponent;
  let fixture: ComponentFixture<CREWFeedbackRemarkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CREWFeedbackRemarkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CREWFeedbackRemarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
