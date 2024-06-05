import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TECHSFILISTComponent } from './tech-sfi-list.component';

describe('TECHSFILISTComponent', () => {
  let component: TECHSFILISTComponent;
  let fixture: ComponentFixture<TECHSFILISTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TECHSFILISTComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TECHSFILISTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
