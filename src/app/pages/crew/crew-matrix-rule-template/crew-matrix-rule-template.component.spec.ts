import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CREWMatrixRuleTemplateComponent } from './crew-matrix-rule-template.component';

describe('CREWMatrixRuleTemplateComponent', () => {
  let component: CREWMatrixRuleTemplateComponent;
  let fixture: ComponentFixture<CREWMatrixRuleTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CREWMatrixRuleTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CREWMatrixRuleTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
