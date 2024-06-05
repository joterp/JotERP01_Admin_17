import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PURCNewRFQTERMComponent } from './purc-new-rfq-term.component';

describe('PURCNewRFQTERMComponent', () => {
  let component: PURCNewRFQTERMComponent;
  let fixture: ComponentFixture<PURCNewRFQTERMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PURCNewRFQTERMComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PURCNewRFQTERMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
