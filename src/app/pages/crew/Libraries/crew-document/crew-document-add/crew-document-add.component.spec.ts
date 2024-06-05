import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CREWDocumentAddComponent } from './crew-document-add.component';

describe('CREWDocumentAddComponent', () => {
  let component: CREWDocumentAddComponent;
  let fixture: ComponentFixture<CREWDocumentAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CREWDocumentAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CREWDocumentAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
