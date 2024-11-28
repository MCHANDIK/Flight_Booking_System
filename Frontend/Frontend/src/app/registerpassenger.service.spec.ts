import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RegisterpassengerService } from './registerpassenger.service';

describe('RegisterpassengerService', () => {
  let service: RegisterpassengerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        // ... other imports
        HttpClientTestingModule,
      ],
    });
    service = TestBed.inject(RegisterpassengerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
