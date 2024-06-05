import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CREWProposedCrewToClientComponent } from './crew-proposed-crew-to-client.component';

describe('CREWProposedCrewToClientComponent', () => {
  let component: CREWProposedCrewToClientComponent;
  let fixture: ComponentFixture<CREWProposedCrewToClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CREWProposedCrewToClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CREWProposedCrewToClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
