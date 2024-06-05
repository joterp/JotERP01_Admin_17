import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TECHLIBWinchComponent } from './tech-lib-winch.component';

describe('TECHLIBWinchComponent', () => {
  let component: TECHLIBWinchComponent;
  let fixture: ComponentFixture<TECHLIBWinchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TECHLIBWinchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TECHLIBWinchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
