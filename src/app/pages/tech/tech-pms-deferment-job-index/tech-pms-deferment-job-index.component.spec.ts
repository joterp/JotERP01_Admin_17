import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TECHPMSDefermentJobIndexComponent } from './tech-pms-deferment-job-index.component';

describe('TECHPMSDefermentJobIndexComponent', () => {
  let component: TECHPMSDefermentJobIndexComponent;
  let fixture: ComponentFixture<TECHPMSDefermentJobIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TECHPMSDefermentJobIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TECHPMSDefermentJobIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
