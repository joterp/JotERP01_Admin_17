import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CREWCadetLogGradesComponent } from './crew-cadet-log-grades.component';

describe('CREWCadetLogGradesComponent', () => {
  let component: CREWCadetLogGradesComponent;
  let fixture: ComponentFixture<CREWCadetLogGradesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CREWCadetLogGradesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CREWCadetLogGradesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
