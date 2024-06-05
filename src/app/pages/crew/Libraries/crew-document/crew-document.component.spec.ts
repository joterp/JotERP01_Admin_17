import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CREWDocumentComponent } from './crew-document.component';

describe('CREWDocumentComponent', () => {
  let component: CREWDocumentComponent;
  let fixture: ComponentFixture<CREWDocumentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CREWDocumentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CREWDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
