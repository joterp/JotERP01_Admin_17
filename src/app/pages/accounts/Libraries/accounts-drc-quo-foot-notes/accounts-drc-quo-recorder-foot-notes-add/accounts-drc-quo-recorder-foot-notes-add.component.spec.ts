import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountsDRCQUORecorderFootNotesAddComponent } from './accounts-drc-quo-recorder-foot-notes-add.component';

describe('AccountsDRCQUORecorderFootNotesAddComponent', () => {
  let component: AccountsDRCQUORecorderFootNotesAddComponent;
  let fixture: ComponentFixture<AccountsDRCQUORecorderFootNotesAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccountsDRCQUORecorderFootNotesAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccountsDRCQUORecorderFootNotesAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
