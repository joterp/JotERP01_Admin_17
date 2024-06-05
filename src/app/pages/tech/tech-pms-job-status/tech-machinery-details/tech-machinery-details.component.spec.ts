import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TECHMachineryDetailsComponent } from './tech-machinery-details.component';

describe('TECHMachineryDetailsComponent', () => {
  let component: TECHMachineryDetailsComponent;
  let fixture: ComponentFixture<TECHMachineryDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TECHMachineryDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TECHMachineryDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
