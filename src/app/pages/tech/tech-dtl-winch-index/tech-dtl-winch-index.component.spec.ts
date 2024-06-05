import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TECHDTLWINCHIndexComponent } from './tech-dtl-winch-index.component';

describe('TECHDTLWINCHIndexComponent', () => {
  let component: TECHDTLWINCHIndexComponent;
  let fixture: ComponentFixture<TECHDTLWINCHIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TECHDTLWINCHIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TECHDTLWINCHIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
