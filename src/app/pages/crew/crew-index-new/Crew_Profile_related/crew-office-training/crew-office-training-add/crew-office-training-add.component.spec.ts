import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CREWOfficeTrainingAddComponent } from './crew-office-training-add.component';

describe('CREWOfficeTrainingAddComponent', () => {
  let component: CREWOfficeTrainingAddComponent;
  let fixture: ComponentFixture<CREWOfficeTrainingAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CREWOfficeTrainingAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CREWOfficeTrainingAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
