import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TECHEngineLogIndexComponent } from './tech-engine-log-index.component';

describe('TECHEngineLogIndexComponent', () => {
  let component: TECHEngineLogIndexComponent;
  let fixture: ComponentFixture<TECHEngineLogIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TECHEngineLogIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TECHEngineLogIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
