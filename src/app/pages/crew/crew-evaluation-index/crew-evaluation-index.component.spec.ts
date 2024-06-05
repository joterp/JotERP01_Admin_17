import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CREWEvaluationIndexComponent } from './crew-evaluation-index.component';

describe('CREWEvaluationIndexComponent', () => {
  let component: CREWEvaluationIndexComponent;
  let fixture: ComponentFixture<CREWEvaluationIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CREWEvaluationIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CREWEvaluationIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
