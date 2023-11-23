import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { noCreadoGuard } from './no-creado.guard';

describe('noCreadoGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => noCreadoGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
