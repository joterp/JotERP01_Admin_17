import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CREWOnboardTrainingComponent } from './crew-onboard-training.component';

describe('CREWOnboardTrainingComponent', () => {
  let component: CREWOnboardTrainingComponent;
  let fixture: ComponentFixture<CREWOnboardTrainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CREWOnboardTrainingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CREWOnboardTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
