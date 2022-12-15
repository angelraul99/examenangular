
import { TestBed } from '@angular/core/testing';

import { EducacionService } from './Educacion.service';

describe('EducacionService', () => {
  let service: EducacionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EducacionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});