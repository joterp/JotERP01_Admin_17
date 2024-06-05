import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CREWNOKDetailsAddModalComponent } from './crew-nok-details-add-modal.component';

describe('CREWNOKDetailsAddModalComponent', () => {
  let component: CREWNOKDetailsAddModalComponent;
  let fixture: ComponentFixture<CREWNOKDetailsAddModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CREWNOKDetailsAddModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CREWNOKDetailsAddModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
