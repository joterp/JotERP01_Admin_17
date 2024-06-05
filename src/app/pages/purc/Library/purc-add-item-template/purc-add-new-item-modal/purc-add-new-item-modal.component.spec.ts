import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PURCAddNewItemModalComponent } from './purc-add-new-item-modal.component';

describe('PURCAddNewItemModalComponent', () => {
  let component: PURCAddNewItemModalComponent;
  let fixture: ComponentFixture<PURCAddNewItemModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PURCAddNewItemModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PURCAddNewItemModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
