import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CREWCalenderComponent } from './crew-calender.component';

describe('CREWCalenderComponent', () => {
  let component: CREWCalenderComponent;
  let fixture: ComponentFixture<CREWCalenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CREWCalenderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CREWCalenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
