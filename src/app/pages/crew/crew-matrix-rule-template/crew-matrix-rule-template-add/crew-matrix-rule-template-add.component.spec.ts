import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CREWMatrixRuleTemplateAddComponent } from './crew-matrix-rule-template-add.component';

describe('CREWMatrixRuleTemplateAddComponent', () => {
  let component: CREWMatrixRuleTemplateAddComponent;
  let fixture: ComponentFixture<CREWMatrixRuleTemplateAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CREWMatrixRuleTemplateAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CREWMatrixRuleTemplateAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
