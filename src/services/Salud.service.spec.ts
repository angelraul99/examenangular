
import { TestBed } from '@angular/core/testing';

import { SaludService } from './Salud.service';

describe('SaludService', () => {
  let service: SaludService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SaludService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});