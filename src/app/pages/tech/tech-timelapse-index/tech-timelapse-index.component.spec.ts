import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TECHTimelapseIndexComponent } from './tech-timelapse-index.component';

describe('TECHTimelapseIndexComponent', () => {
  let component: TECHTimelapseIndexComponent;
  let fixture: ComponentFixture<TECHTimelapseIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TECHTimelapseIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TECHTimelapseIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
