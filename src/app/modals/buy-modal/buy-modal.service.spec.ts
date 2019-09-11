import { TestBed } from '@angular/core/testing';

import { BuyModalService } from './buy-modal.service';

describe('BuyModalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BuyModalService = TestBed.get(BuyModalService);
    expect(service).toBeTruthy();
  });
});
