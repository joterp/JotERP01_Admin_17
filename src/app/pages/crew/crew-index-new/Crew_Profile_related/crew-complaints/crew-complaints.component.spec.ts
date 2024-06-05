import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CREWComplaintsComponent } from './crew-complaints.component';

describe('CREWComplaintsComponent', () => {
  let component: CREWComplaintsComponent;
  let fixture: ComponentFixture<CREWComplaintsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CREWComplaintsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CREWComplaintsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
