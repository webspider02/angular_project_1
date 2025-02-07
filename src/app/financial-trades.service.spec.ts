import { TestBed } from '@angular/core/testing';

import { FinancialTradesService } from './financial-trades.service';

describe('FinancialTradesService', () => {
  let service: FinancialTradesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FinancialTradesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
