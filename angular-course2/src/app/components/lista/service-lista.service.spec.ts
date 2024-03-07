import { TestBed } from '@angular/core/testing';

import { ServiceListaService } from './service-lista.service';

describe('ServiceListaService', () => {
  let service: ServiceListaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceListaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
