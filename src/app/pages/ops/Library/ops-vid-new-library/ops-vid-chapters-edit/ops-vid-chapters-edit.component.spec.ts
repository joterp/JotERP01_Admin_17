import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OPSVIDChaptersEditComponent } from './ops-vid-chapters-edit.component';

describe('OPSVIDChaptersEditComponent', () => {
  let component: OPSVIDChaptersEditComponent;
  let fixture: ComponentFixture<OPSVIDChaptersEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OPSVIDChaptersEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OPSVIDChaptersEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
