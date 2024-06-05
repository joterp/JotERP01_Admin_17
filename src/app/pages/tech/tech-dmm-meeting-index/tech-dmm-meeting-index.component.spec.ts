import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TECHDMMMeetingIndexComponent } from './tech-dmm-meeting-index.component';

describe('TECHDMMMeetingIndexComponent', () => {
  let component: TECHDMMMeetingIndexComponent;
  let fixture: ComponentFixture<TECHDMMMeetingIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TECHDMMMeetingIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TECHDMMMeetingIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
