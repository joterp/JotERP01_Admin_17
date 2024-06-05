import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OPSNADVoyageLogTreeViewComponent } from './ops-nad-voyage-log-tree-view.component';

describe('OPSNADVoyageLogTreeViewComponent', () => {
  let component: OPSNADVoyageLogTreeViewComponent;
  let fixture: ComponentFixture<OPSNADVoyageLogTreeViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OPSNADVoyageLogTreeViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OPSNADVoyageLogTreeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
