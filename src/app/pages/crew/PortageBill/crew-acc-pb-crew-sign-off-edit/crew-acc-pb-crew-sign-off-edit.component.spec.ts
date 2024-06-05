import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CREWACCPBCrewSignOFFEditComponent } from './crew-acc-pb-crew-sign-off-edit.component';

describe('CREWACCPBCrewSignOFFEditComponent', () => {
  let component: CREWACCPBCrewSignOFFEditComponent;
  let fixture: ComponentFixture<CREWACCPBCrewSignOFFEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CREWACCPBCrewSignOFFEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CREWACCPBCrewSignOFFEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
