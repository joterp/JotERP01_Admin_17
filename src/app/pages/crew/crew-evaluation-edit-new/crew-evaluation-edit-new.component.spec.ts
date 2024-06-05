import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CREWEvaluationEditNewComponent } from './crew-evaluation-edit-new.component';

describe('CREWEvaluationEditNewComponent', () => {
  let component: CREWEvaluationEditNewComponent;
  let fixture: ComponentFixture<CREWEvaluationEditNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CREWEvaluationEditNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CREWEvaluationEditNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
