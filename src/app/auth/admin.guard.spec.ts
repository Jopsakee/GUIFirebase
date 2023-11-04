import { TestBed } from '@angular/core/testing';
import { CanActivate } from '@angular/router';

import { AdminGuard } from './admin.guard';

describe('AdminGuard', () => {
  let adminGuard: CanActivate;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdminGuard],
    });
    adminGuard = TestBed.inject(AdminGuard);
  });

  it('should be created', () => {
    expect(adminGuard).toBeTruthy();
  });
});
