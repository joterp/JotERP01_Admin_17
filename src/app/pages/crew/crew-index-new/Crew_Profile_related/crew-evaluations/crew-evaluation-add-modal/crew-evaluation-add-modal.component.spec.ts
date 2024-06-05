import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CREWEvaluationAddModalComponent } from './crew-evaluation-add-modal.component';

describe('CREWEvaluationAddModalComponent', () => {
  let component: CREWEvaluationAddModalComponent;
  let fixture: ComponentFixture<CREWEvaluationAddModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CREWEvaluationAddModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CREWEvaluationAddModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
