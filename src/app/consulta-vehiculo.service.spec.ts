import { TestBed, inject } from '@angular/core/testing';

import { ConsultaVehiculoService } from './consulta-vehiculo.service';

describe('ConsultaVehiculoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConsultaVehiculoService]
    });
  });

  it('should be created', inject([ConsultaVehiculoService], (service: ConsultaVehiculoService) => {
    expect(service).toBeTruthy();
  }));
});
