import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CREWCareerHistoryComponent } from './crew-career-history.component';

describe('CREWCareerHistoryComponent', () => {
  let component: CREWCareerHistoryComponent;
  let fixture: ComponentFixture<CREWCareerHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CREWCareerHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CREWCareerHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
