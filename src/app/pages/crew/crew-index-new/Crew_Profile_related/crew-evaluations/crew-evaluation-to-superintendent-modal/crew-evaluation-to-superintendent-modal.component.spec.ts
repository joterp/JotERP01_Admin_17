import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CREWEvaluationToSuperintendentModalComponent } from './crew-evaluation-to-superintendent-modal.component';

describe('CREWEvaluationToSuperintendentModalComponent', () => {
  let component: CREWEvaluationToSuperintendentModalComponent;
  let fixture: ComponentFixture<CREWEvaluationToSuperintendentModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CREWEvaluationToSuperintendentModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CREWEvaluationToSuperintendentModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
