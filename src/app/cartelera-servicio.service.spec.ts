import { TestBed } from '@angular/core/testing';

import { CarteleraServicioService } from './cartelera-servicio.service';

describe('CarteleraServicioService', () => {
  let service: CarteleraServicioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarteleraServicioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
