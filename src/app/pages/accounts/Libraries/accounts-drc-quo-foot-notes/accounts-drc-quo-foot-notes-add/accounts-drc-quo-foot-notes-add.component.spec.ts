import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountsDRCQUOFootNotesAddComponent } from './accounts-drc-quo-foot-notes-add.component';

describe('AccountsDRCQUOFootNotesAddComponent', () => {
  let component: AccountsDRCQUOFootNotesAddComponent;
  let fixture: ComponentFixture<AccountsDRCQUOFootNotesAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccountsDRCQUOFootNotesAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccountsDRCQUOFootNotesAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
