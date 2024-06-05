import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CREWACCPBVIEWATTACHMENTComponent } from './crew-acc-pb-view-attachment.component';

describe('CREWACCPBVIEWATTACHMENTComponent', () => {
  let component: CREWACCPBVIEWATTACHMENTComponent;
  let fixture: ComponentFixture<CREWACCPBVIEWATTACHMENTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CREWACCPBVIEWATTACHMENTComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CREWACCPBVIEWATTACHMENTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
