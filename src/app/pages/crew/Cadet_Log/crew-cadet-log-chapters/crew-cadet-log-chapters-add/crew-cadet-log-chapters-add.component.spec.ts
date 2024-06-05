import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CREWCadetLogChaptersAddComponent } from './crew-cadet-log-chapters-add.component';

describe('CREWCadetLogChaptersAddComponent', () => {
  let component: CREWCadetLogChaptersAddComponent;
  let fixture: ComponentFixture<CREWCadetLogChaptersAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CREWCadetLogChaptersAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CREWCadetLogChaptersAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
