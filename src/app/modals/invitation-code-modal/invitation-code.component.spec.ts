import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvitationCodeModalComponent } from './invitation-code-modal.component';

describe('InvitationCodeModalComponent', () => {
  let component: InvitationCodeModalComponent;
  let fixture: ComponentFixture<InvitationCodeModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvitationCodeModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvitationCodeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
