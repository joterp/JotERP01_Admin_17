import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TECHImportPMSDetailsComponent } from './tech-import-pms-details.component';

describe('TECHImportPMSDetailsComponent', () => {
  let component: TECHImportPMSDetailsComponent;
  let fixture: ComponentFixture<TECHImportPMSDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TECHImportPMSDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TECHImportPMSDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
