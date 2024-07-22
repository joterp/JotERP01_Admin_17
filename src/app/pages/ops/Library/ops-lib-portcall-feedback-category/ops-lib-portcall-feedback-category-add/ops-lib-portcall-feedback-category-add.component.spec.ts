import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpsLibPortcallFeedbackCategoryAddComponent } from './ops-lib-portcall-feedback-category-add.component';

describe('OpsLibPortcallFeedbackCategoryAddComponent', () => {
  let component: OpsLibPortcallFeedbackCategoryAddComponent;
  let fixture: ComponentFixture<OpsLibPortcallFeedbackCategoryAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OpsLibPortcallFeedbackCategoryAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OpsLibPortcallFeedbackCategoryAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
