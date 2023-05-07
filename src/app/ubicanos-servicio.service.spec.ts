import { TestBed } from '@angular/core/testing';

import { UbicanosServicioService } from './ubicanos-servicio.service';

describe('UbicanosServicioService', () => {
  let service: UbicanosServicioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UbicanosServicioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
