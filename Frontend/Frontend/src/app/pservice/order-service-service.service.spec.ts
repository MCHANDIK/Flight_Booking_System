import { TestBed } from '@angular/core/testing';

import { OrderServiceServiceService } from './order-service-service.service';

describe('OrderServiceServiceService', () => {
  let service: OrderServiceServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrderServiceServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
