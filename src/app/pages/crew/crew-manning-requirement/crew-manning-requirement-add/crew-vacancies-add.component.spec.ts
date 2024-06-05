import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CREWVacanciesAddComponent } from './crew-vacancies-add.component';

describe('CREWVacanciesAddComponent', () => {
  let component: CREWVacanciesAddComponent;
  let fixture: ComponentFixture<CREWVacanciesAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CREWVacanciesAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CREWVacanciesAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
