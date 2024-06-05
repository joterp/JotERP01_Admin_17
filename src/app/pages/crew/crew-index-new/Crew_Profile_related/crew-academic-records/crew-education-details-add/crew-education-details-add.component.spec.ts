import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CREWEducationDetailsAddComponent } from './crew-education-details-add.component';

describe('CREWEducationDetailsAddComponent', () => {
  let component: CREWEducationDetailsAddComponent;
  let fixture: ComponentFixture<CREWEducationDetailsAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CREWEducationDetailsAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CREWEducationDetailsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
