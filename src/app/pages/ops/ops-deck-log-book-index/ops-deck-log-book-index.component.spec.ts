import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OPSDeckLogBookIndexComponent } from './ops-deck-log-book-index.component';

describe('OPSDeckLogBookIndexComponent', () => {
  let component: OPSDeckLogBookIndexComponent;
  let fixture: ComponentFixture<OPSDeckLogBookIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OPSDeckLogBookIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OPSDeckLogBookIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
