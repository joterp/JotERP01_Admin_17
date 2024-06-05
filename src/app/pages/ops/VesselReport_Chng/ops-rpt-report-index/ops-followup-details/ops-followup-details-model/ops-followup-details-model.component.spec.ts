import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OPSFollowupDetailsModelComponent } from './ops-followup-details-model.component';

describe('OPSFollowupDetailsModelComponent', () => {
  let component: OPSFollowupDetailsModelComponent;
  let fixture: ComponentFixture<OPSFollowupDetailsModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OPSFollowupDetailsModelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OPSFollowupDetailsModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
