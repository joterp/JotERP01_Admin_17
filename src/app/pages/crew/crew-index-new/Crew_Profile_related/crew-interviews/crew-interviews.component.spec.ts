import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CREWInterviewsComponent } from './crew-interviews.component';

describe('CREWInterviewsComponent', () => {
  let component: CREWInterviewsComponent;
  let fixture: ComponentFixture<CREWInterviewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CREWInterviewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CREWInterviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
