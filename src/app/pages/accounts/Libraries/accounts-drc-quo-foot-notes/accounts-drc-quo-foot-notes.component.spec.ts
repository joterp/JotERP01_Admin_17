import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountsDRCQUOFootNotesComponent } from './accounts-drc-quo-foot-notes.component';

describe('AccountsDRCQUOFootNotesComponent', () => {
  let component: AccountsDRCQUOFootNotesComponent;
  let fixture: ComponentFixture<AccountsDRCQUOFootNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccountsDRCQUOFootNotesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccountsDRCQUOFootNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
