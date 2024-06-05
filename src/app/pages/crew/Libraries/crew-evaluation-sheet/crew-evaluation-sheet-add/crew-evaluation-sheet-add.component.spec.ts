import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CREWEvaluationSheetAddComponent } from './crew-evaluation-sheet-add.component';

describe('CREWEvaluationSheetAddComponent', () => {
  let component: CREWEvaluationSheetAddComponent;
  let fixture: ComponentFixture<CREWEvaluationSheetAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CREWEvaluationSheetAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CREWEvaluationSheetAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
