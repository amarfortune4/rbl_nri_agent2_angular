import { TestBed } from '@angular/core/testing';

import { AgentDataServiceService } from './agent-data-service.service';

describe('AgentDataServiceService', () => {
  let service: AgentDataServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgentDataServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
