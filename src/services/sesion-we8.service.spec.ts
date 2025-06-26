import { TestBed } from '@angular/core/testing';

import { SesionWe8Service } from './sesion-we8.service';

describe('SesionWe8Service', () => {
  let service: SesionWe8Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SesionWe8Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
