import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpsLibPortcallFeedbackCategoryComponent } from './ops-lib-portcall-feedback-category.component';

describe('OpsLibPortcallFeedbackCategoryComponent', () => {
  let component: OpsLibPortcallFeedbackCategoryComponent;
  let fixture: ComponentFixture<OpsLibPortcallFeedbackCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OpsLibPortcallFeedbackCategoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OpsLibPortcallFeedbackCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
