import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CREWEvaluationsComponent } from './crew-evaluations.component';

describe('CREWEvaluationsComponent', () => {
  let component: CREWEvaluationsComponent;
  let fixture: ComponentFixture<CREWEvaluationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CREWEvaluationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CREWEvaluationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
