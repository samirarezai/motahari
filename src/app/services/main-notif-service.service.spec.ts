import { TestBed } from '@angular/core/testing';

import { MainNotifServiceService } from './main-notif-service.service';

describe('MainNotifServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MainNotifServiceService = TestBed.get(MainNotifServiceService);
    expect(service).toBeTruthy();
  });
});
