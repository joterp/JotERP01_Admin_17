import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CREWCVComponent } from './crew-cv.component';

describe('CREWCVComponent', () => {
  let component: CREWCVComponent;
  let fixture: ComponentFixture<CREWCVComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CREWCVComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CREWCVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
