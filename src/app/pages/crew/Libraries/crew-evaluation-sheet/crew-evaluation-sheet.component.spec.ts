import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CREWEvaluationSheetComponent } from './crew-evaluation-sheet.component';

describe('CREWEvaluationSheetComponent', () => {
  let component: CREWEvaluationSheetComponent;
  let fixture: ComponentFixture<CREWEvaluationSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CREWEvaluationSheetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CREWEvaluationSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
