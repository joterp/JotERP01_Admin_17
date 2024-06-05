import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CREWMatrixRuleAssignmentAddComponent } from './crew-matrix-rule-assignment-add.component';

describe('CREWMatrixRuleAssignmentAddComponent', () => {
  let component: CREWMatrixRuleAssignmentAddComponent;
  let fixture: ComponentFixture<CREWMatrixRuleAssignmentAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CREWMatrixRuleAssignmentAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CREWMatrixRuleAssignmentAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
