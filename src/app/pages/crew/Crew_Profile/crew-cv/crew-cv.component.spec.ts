import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrewCVComponent } from './crew-cv.component';

describe('CrewCVComponent', () => {
  let component: CrewCVComponent;
  let fixture: ComponentFixture<CrewCVComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrewCVComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrewCVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
