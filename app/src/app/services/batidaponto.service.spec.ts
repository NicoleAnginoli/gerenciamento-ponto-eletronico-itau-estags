import { TestBed } from '@angular/core/testing';

import { BatidapontoService } from './batidaponto.service';

describe('BatidapontoService', () => {
  let service: BatidapontoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BatidapontoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
