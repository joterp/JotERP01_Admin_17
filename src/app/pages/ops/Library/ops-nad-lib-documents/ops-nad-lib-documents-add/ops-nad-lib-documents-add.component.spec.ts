import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpsNadLibDocumentsAddComponent } from './ops-nad-lib-documents-add.component';

describe('OpsNadLibDocumentsAddComponent', () => {
  let component: OpsNadLibDocumentsAddComponent;
  let fixture: ComponentFixture<OpsNadLibDocumentsAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpsNadLibDocumentsAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpsNadLibDocumentsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
