import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IMPORTDETAILSComponent } from './import-details.component';

describe('IMPORTDETAILSComponent', () => {
  let component: IMPORTDETAILSComponent;
  let fixture: ComponentFixture<IMPORTDETAILSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IMPORTDETAILSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IMPORTDETAILSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
