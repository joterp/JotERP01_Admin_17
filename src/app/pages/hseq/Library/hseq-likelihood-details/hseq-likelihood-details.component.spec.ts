import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HSEQLIKELIHOODDETAILSComponent } from './hseq-likelihood-details.component';

describe('HSEQLIKELIHOODDETAILSComponent', () => {
  let component: HSEQLIKELIHOODDETAILSComponent;
  let fixture: ComponentFixture<HSEQLIKELIHOODDETAILSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HSEQLIKELIHOODDETAILSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HSEQLIKELIHOODDETAILSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
