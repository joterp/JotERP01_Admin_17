import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CREWEventPlanningIndexComponent } from './crew-event-planning-index.component';

describe('CREWEventPlanningIndexComponent', () => {
  let component: CREWEventPlanningIndexComponent;
  let fixture: ComponentFixture<CREWEventPlanningIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CREWEventPlanningIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CREWEventPlanningIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
