import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CREWTrainingsComponent } from './crew-trainings.component';

describe('CREWTrainingsComponent', () => {
  let component: CREWTrainingsComponent;
  let fixture: ComponentFixture<CREWTrainingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CREWTrainingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CREWTrainingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
