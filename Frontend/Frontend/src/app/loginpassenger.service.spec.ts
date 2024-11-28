import { TestBed } from '@angular/core/testing';

import { LoginPassengerService } from './loginpassenger.service';

describe('LoginpassengerService', () => {
  let service: LoginPassengerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginPassengerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
