import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CREWVcanciesComponent } from './crew-vacancies.component';

describe('CREWVcanciesComponent', () => {
  let component: CREWVcanciesComponent;
  let fixture: ComponentFixture<CREWVcanciesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CREWVcanciesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CREWVcanciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
