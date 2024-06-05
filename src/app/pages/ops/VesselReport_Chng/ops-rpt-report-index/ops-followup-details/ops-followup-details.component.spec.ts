import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpsFollowupDetailsComponent } from './ops-followup-details.component';

describe('OpsFollowupDetailsComponent', () => {
  let component: OpsFollowupDetailsComponent;
  let fixture: ComponentFixture<OpsFollowupDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpsFollowupDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpsFollowupDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
