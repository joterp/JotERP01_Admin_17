import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CREWCadetLogChaptersComponent } from './crew-cadet-log-chapters.component';

describe('CREWCadetLogChaptersComponent', () => {
  let component: CREWCadetLogChaptersComponent;
  let fixture: ComponentFixture<CREWCadetLogChaptersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CREWCadetLogChaptersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CREWCadetLogChaptersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
