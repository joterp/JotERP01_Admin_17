import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CREWMatrixRuleAssignmentComponent } from './crew-matrix-rule-assignment.component';

describe('CREWMatrixRuleAssignmentComponent', () => {
  let component: CREWMatrixRuleAssignmentComponent;
  let fixture: ComponentFixture<CREWMatrixRuleAssignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CREWMatrixRuleAssignmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CREWMatrixRuleAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
