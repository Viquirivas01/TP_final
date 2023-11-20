import { TestBed } from '@angular/core/testing';

import { InformacionJuegoService } from './informacion-juego.service';

describe('InformacionJuegoService', () => {
  let service: InformacionJuegoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InformacionJuegoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
