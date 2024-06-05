import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TECHEngineLogDetailsComponent } from './tech-engine-log-details.component';

describe('TECHEngineLogDetailsComponent', () => {
  let component: TECHEngineLogDetailsComponent;
  let fixture: ComponentFixture<TECHEngineLogDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TECHEngineLogDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TECHEngineLogDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
