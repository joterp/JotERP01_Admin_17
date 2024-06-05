import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TECHWeeklyWorkIndexComponent } from './tech-weekly-work-index.component';

describe('TECHWeeklyWorkIndexComponent', () => {
  let component: TECHWeeklyWorkIndexComponent;
  let fixture: ComponentFixture<TECHWeeklyWorkIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TECHWeeklyWorkIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TECHWeeklyWorkIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
