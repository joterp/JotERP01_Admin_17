import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CREWIndexNewComponent } from './crew-index-new.component';

describe('CREWIndexNewComponent', () => {
  let component: CREWIndexNewComponent;
  let fixture: ComponentFixture<CREWIndexNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CREWIndexNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CREWIndexNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
