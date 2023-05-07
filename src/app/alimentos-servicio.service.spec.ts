import { TestBed } from '@angular/core/testing';

import { AlimentosServicioService } from './alimentos-servicio.service';

describe('AlimentosServicioService', () => {
  let service: AlimentosServicioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlimentosServicioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
