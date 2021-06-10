import { TestBed } from '@angular/core/testing';

import { Comp2Service } from './comp2.service';

describe('Comp2Service', () => {
  let service: Comp2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Comp2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
