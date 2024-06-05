import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CREWCopySetupModalComponent } from './crew-copy-setup-modal.component';

describe('CREWCopySetupModalComponent', () => {
  let component: CREWCopySetupModalComponent;
  let fixture: ComponentFixture<CREWCopySetupModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CREWCopySetupModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CREWCopySetupModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
