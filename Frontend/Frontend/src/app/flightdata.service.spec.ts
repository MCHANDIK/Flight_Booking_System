import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { FlightdataService } from './flightdata.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('FlightdataService', () => {
  let service: FlightdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule,HttpClientModule],
      providers: [FlightdataService],
    });
    
    service = TestBed.inject(FlightdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
