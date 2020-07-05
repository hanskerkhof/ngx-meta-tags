import { TestBed } from '@angular/core/testing';

import { NgxMetaTagsGuardGuard } from './ngx-meta-tags-guard.guard';

describe('NgxMetaTagsGuardGuard', () => {
  let guard: NgxMetaTagsGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(NgxMetaTagsGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
