import { TestBed } from '@angular/core/testing';

import { NgxMetaTagsService } from './ngx-meta-tags.service';

describe('NgxMetaTagsService', () => {
  let service: NgxMetaTagsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxMetaTagsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
