import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OPSVIDLIBChaptersComponent } from './ops-vid-lib-chapters.component';

describe('OPSVIDLIBChaptersComponent', () => {
  let component: OPSVIDLIBChaptersComponent;
  let fixture: ComponentFixture<OPSVIDLIBChaptersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OPSVIDLIBChaptersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OPSVIDLIBChaptersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
