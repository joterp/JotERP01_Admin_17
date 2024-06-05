import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CREWACCPBCrewSignOFFComponent } from './crew-acc-pb-crew-sign-off.component';

describe('CREWACCPBCrewSignOFFComponent', () => {
  let component: CREWACCPBCrewSignOFFComponent;
  let fixture: ComponentFixture<CREWACCPBCrewSignOFFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CREWACCPBCrewSignOFFComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CREWACCPBCrewSignOFFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
