import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CREWCareerHistoryAddModalComponent } from './crew-career-history-add-modal.component';

describe('CREWCareerHistoryAddModalComponent', () => {
  let component: CREWCareerHistoryAddModalComponent;
  let fixture: ComponentFixture<CREWCareerHistoryAddModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CREWCareerHistoryAddModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CREWCareerHistoryAddModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
