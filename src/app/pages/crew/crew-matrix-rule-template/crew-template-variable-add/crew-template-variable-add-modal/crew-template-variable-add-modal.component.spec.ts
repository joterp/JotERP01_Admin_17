import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CREWTemplateVariableAddModalComponent } from './crew-template-variable-add-modal.component';

describe('CREWTemplateVariableAddModalComponent', () => {
  let component: CREWTemplateVariableAddModalComponent;
  let fixture: ComponentFixture<CREWTemplateVariableAddModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CREWTemplateVariableAddModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CREWTemplateVariableAddModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
