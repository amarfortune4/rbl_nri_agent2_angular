import { TestBed } from '@angular/core/testing';

import { AgentCommonServiceService } from './agent-common-service.service';

describe('AgentCommonServiceService', () => {
  let service: AgentCommonServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgentCommonServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
