import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CREWUniformDetailsComponent } from './crew-uniform-details.component';

describe('CREWUniformDetailsComponent', () => {
  let component: CREWUniformDetailsComponent;
  let fixture: ComponentFixture<CREWUniformDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CREWUniformDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CREWUniformDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
