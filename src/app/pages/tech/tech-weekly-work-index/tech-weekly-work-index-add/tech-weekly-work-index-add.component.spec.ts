import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TECHWeeklyWorkIndexAddComponent } from './tech-weekly-work-index-add.component';

describe('TECHWeeklyWorkIndexAddComponent', () => {
  let component: TECHWeeklyWorkIndexAddComponent;
  let fixture: ComponentFixture<TECHWeeklyWorkIndexAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TECHWeeklyWorkIndexAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TECHWeeklyWorkIndexAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
