import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EXPORTDETAILSComponent } from './export-details.component';

describe('EXPORTDETAILSComponent', () => {
  let component: EXPORTDETAILSComponent;
  let fixture: ComponentFixture<EXPORTDETAILSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EXPORTDETAILSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EXPORTDETAILSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
