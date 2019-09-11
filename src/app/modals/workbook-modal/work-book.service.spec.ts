import { TestBed } from '@angular/core/testing';

import { WorkBookService } from './work-book.service';

describe('WorkBookService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WorkBookService = TestBed.get(WorkBookService);
    expect(service).toBeTruthy();
  });
});
