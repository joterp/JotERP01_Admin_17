import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechDtlWinchIndexAddOpenComponent } from './tech-dtl-winch-index-add-open.component';

describe('TechDtlWinchIndexAddOpenComponent', () => {
  let component: TechDtlWinchIndexAddOpenComponent;
  let fixture: ComponentFixture<TechDtlWinchIndexAddOpenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechDtlWinchIndexAddOpenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechDtlWinchIndexAddOpenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
