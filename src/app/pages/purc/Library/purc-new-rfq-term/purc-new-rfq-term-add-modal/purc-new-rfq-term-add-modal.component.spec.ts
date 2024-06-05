import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PURCNewRFQTERMADDModalComponent } from './purc-new-rfq-term-add-modal.component';

describe('PURCNewRFQTERMADDModalComponent', () => {
  let component: PURCNewRFQTERMADDModalComponent;
  let fixture: ComponentFixture<PURCNewRFQTERMADDModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PURCNewRFQTERMADDModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PURCNewRFQTERMADDModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
