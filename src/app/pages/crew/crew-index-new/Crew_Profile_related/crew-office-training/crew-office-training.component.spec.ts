import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CREWOfficeTrainingComponent } from './crew-office-training.component';

describe('CREWOfficeTrainingComponent', () => {
  let component: CREWOfficeTrainingComponent;
  let fixture: ComponentFixture<CREWOfficeTrainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CREWOfficeTrainingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CREWOfficeTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
