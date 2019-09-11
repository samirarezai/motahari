import { TestBed } from '@angular/core/testing';

import { InvitationCodeModalService } from './invitation-code-modal/invitation-code-modal.service';

describe('InvitationCodeModalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InvitationCodeModalService = TestBed.get(InvitationCodeModalService);
    expect(service).toBeTruthy();
  });
});
