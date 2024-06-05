import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PURCLocationComponent } from './purc-location.component';

describe('PURCLocationComponent', () => {
  let component: PURCLocationComponent;
  let fixture: ComponentFixture<PURCLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PURCLocationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PURCLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
