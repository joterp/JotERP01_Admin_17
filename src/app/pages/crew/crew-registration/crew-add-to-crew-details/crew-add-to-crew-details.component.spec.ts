import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CREWAddToCrewDetailsComponent } from './crew-add-to-crew-details.component';

describe('CREWAddToCrewDetailsComponent', () => {
  let component: CREWAddToCrewDetailsComponent;
  let fixture: ComponentFixture<CREWAddToCrewDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CREWAddToCrewDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CREWAddToCrewDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
