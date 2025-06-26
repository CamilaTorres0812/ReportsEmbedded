import { TestBed } from '@angular/core/testing';

import { StoresProcedureService } from './stores-procedure.service';

describe('StoresProcedureService', () => {
  let service: StoresProcedureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StoresProcedureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
