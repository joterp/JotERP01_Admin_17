import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CREWCopyTemplateModelComponent } from './crew-copy-template-model.component';

describe('CREWCopyTemplateModelComponent', () => {
  let component: CREWCopyTemplateModelComponent;
  let fixture: ComponentFixture<CREWCopyTemplateModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CREWCopyTemplateModelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CREWCopyTemplateModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
