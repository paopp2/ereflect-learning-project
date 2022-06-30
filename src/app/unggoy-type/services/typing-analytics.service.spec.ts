import { TestBed } from '@angular/core/testing';

import { TypingAnalyticsService } from './typing-analytics.service';

describe('TypingAnalyticsService', () => {
  let service: TypingAnalyticsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypingAnalyticsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
