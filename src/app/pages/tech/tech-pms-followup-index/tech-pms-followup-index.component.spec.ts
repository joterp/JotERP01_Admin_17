import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TECHPMSFollowupIndexComponent } from './tech-pms-followup-index.component';

describe('TECHPMSFollowupIndexComponent', () => {
  let component: TECHPMSFollowupIndexComponent;
  let fixture: ComponentFixture<TECHPMSFollowupIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TECHPMSFollowupIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TECHPMSFollowupIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
