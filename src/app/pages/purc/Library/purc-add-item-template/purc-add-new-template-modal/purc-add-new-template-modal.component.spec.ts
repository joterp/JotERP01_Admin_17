import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PURCAddNewTemplateModalComponent } from './purc-add-new-template-modal.component';

describe('PURCAddNewTemplateModalComponent', () => {
  let component: PURCAddNewTemplateModalComponent;
  let fixture: ComponentFixture<PURCAddNewTemplateModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PURCAddNewTemplateModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PURCAddNewTemplateModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
