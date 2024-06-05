import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OPSSludgeDetailAddComponent } from './ops-sludge-detail-add.component';

describe('OPSSludgeDetailAddComponent', () => {
  let component: OPSSludgeDetailAddComponent;
  let fixture: ComponentFixture<OPSSludgeDetailAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OPSSludgeDetailAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OPSSludgeDetailAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
