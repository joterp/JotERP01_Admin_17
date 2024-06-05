import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TECHDMMMeetingIndexAddComponent } from './tech-dmm-meeting-index-add.component';

describe('TECHDMMMeetingIndexAddComponent', () => {
  let component: TECHDMMMeetingIndexAddComponent;
  let fixture: ComponentFixture<TECHDMMMeetingIndexAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TECHDMMMeetingIndexAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TECHDMMMeetingIndexAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
