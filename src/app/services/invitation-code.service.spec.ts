import { TestBed } from '@angular/core/testing';

import { InvitationCodeService } from './invitation-code.service';

describe('InvitationCodeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InvitationCodeService = TestBed.get(InvitationCodeService);
    expect(service).toBeTruthy();
  });
});
