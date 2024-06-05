import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CREWCopyPBVictuallingModalComponent } from './crew-copy-pb-victualling-modal.component';

describe('CREWCopyPBVictuallingModalComponent', () => {
  let component: CREWCopyPBVictuallingModalComponent;
  let fixture: ComponentFixture<CREWCopyPBVictuallingModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CREWCopyPBVictuallingModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CREWCopyPBVictuallingModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
