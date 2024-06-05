import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CREWCadetLogGradesAddComponent } from './crew-cadet-log-grades-add.component';

describe('CREWCadetLogGradesAddComponent', () => {
  let component: CREWCadetLogGradesAddComponent;
  let fixture: ComponentFixture<CREWCadetLogGradesAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CREWCadetLogGradesAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CREWCadetLogGradesAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
