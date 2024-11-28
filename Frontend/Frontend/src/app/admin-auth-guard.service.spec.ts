import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { AdminAuthGuardService } from './admin-auth-guard.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('AdminAuthGuardService', () => {
  let service: AdminAuthGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [AdminAuthGuardService],
    });
    service = TestBed.inject(AdminAuthGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
