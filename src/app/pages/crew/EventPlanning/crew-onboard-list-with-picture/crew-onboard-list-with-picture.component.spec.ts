import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CREWOnboardListWithPictureComponent } from './crew-onboard-list-with-picture.component';

describe('CREWOnboardListWithPictureComponent', () => {
  let component: CREWOnboardListWithPictureComponent;
  let fixture: ComponentFixture<CREWOnboardListWithPictureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CREWOnboardListWithPictureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CREWOnboardListWithPictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
