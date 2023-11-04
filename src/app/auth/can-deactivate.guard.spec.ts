import { TestBed } from '@angular/core/testing';
import { CanDeactivate } from '@angular/router';

import { CanDeactivateGuard } from './can-deactivate.guard';

describe('CanDeactivateGuard', () => {
  let canDeactivateGuard: CanDeactivate<any>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CanDeactivateGuard],
    });
    canDeactivateGuard = TestBed.inject(CanDeactivateGuard);
  });

  it('should be created', () => {
    expect(canDeactivateGuard).toBeTruthy();
  });
});
