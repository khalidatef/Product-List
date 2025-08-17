import { TestBed } from '@angular/core/testing';

import { IproductService } from './iproduct.service';

describe('IproductService', () => {
  let service: IproductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IproductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
