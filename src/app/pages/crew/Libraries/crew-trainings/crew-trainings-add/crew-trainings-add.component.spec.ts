import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CREWTrainingsAddComponent } from './crew-trainings-add.component';

describe('CREWTrainingsAddComponent', () => {
  let component: CREWTrainingsAddComponent;
  let fixture: ComponentFixture<CREWTrainingsAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CREWTrainingsAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CREWTrainingsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
