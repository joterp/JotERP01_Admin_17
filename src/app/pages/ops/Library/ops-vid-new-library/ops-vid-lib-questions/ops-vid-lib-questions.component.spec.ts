import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OPSVIDLIBQuestionsComponent } from './ops-vid-lib-questions.component';

describe('OPSVIDLIBQuestionsComponent', () => {
  let component: OPSVIDLIBQuestionsComponent;
  let fixture: ComponentFixture<OPSVIDLIBQuestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OPSVIDLIBQuestionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OPSVIDLIBQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
