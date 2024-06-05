import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OPSVIDQuestionnairesEditComponent } from './ops-vid-questionnaires-edit.component';

describe('OPSVIDQuestionnairesEditComponent', () => {
  let component: OPSVIDQuestionnairesEditComponent;
  let fixture: ComponentFixture<OPSVIDQuestionnairesEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OPSVIDQuestionnairesEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OPSVIDQuestionnairesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
