import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CREWDocumentsComponent } from './crew-documents.component';

describe('CREWDocumentsComponent', () => {
  let component: CREWDocumentsComponent;
  let fixture: ComponentFixture<CREWDocumentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CREWDocumentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CREWDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
