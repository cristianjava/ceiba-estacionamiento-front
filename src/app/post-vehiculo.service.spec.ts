import { TestBed, inject } from '@angular/core/testing';

import { PostVehiculoService } from './post-vehiculo.service';

describe('PostVehiculoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PostVehiculoService]
    });
  });

  it('should be created', inject([PostVehiculoService], (service: PostVehiculoService) => {
    expect(service).toBeTruthy();
  }));
});
