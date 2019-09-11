import { TestBed } from '@angular/core/testing';

import { ResultQuizModalService } from '../modals/quiz-result-modal/result-quiz-modal.service';

describe('ResultQuizModalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ResultQuizModalService = TestBed.get(ResultQuizModalService);
    expect(service).toBeTruthy();
  });
});
