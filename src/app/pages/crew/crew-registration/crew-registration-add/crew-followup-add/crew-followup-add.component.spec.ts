import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CREWFollowupAddComponent } from './crew-followup-add.component';

describe('CREWFollowupAddComponent', () => {
  let component: CREWFollowupAddComponent;
  let fixture: ComponentFixture<CREWFollowupAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CREWFollowupAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CREWFollowupAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
