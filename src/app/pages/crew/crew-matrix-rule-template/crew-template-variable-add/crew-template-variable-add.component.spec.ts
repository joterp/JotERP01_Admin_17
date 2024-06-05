import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CREWTemplateVariableAddComponent } from './crew-template-variable-add.component';

describe('CREWTemplateVariableAddComponent', () => {
  let component: CREWTemplateVariableAddComponent;
  let fixture: ComponentFixture<CREWTemplateVariableAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CREWTemplateVariableAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CREWTemplateVariableAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
