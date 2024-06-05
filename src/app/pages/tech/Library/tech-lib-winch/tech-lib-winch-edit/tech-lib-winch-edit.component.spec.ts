import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TECHLIBWinchEditComponent } from './tech-lib-winch-edit.component';

describe('TECHLIBWinchEditComponent', () => {
  let component: TECHLIBWinchEditComponent;
  let fixture: ComponentFixture<TECHLIBWinchEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TECHLIBWinchEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TECHLIBWinchEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
