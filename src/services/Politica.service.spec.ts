
import { TestBed } from '@angular/core/testing';

import { PoliticaService } from './Politica.service';

describe('PoliticaService', () => {
  let service: PoliticaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PoliticaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});