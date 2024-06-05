import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HSEQLIKELIHOODDETAILSAddComponent } from './hseq-likelihood-details-add.component';

describe('HSEQLIKELIHOODDETAILSAddComponent', () => {
  let component: HSEQLIKELIHOODDETAILSAddComponent;
  let fixture: ComponentFixture<HSEQLIKELIHOODDETAILSAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HSEQLIKELIHOODDETAILSAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HSEQLIKELIHOODDETAILSAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
