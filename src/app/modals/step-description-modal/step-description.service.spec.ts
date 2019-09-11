import { TestBed } from '@angular/core/testing';

import { StepDescriptionService } from './step-description.service';

describe('StepDescriptionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StepDescriptionService = TestBed.get(StepDescriptionService);
    expect(service).toBeTruthy();
  });
});
