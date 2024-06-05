import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OPSVIDQuestionEditComponent } from './ops-vid-question-edit.component';

describe('OPSVIDQuestionEditComponent', () => {
  let component: OPSVIDQuestionEditComponent;
  let fixture: ComponentFixture<OPSVIDQuestionEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OPSVIDQuestionEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OPSVIDQuestionEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
