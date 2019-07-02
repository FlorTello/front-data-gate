import { TestBed } from '@angular/core/testing';

import { DetailManageResolverService } from './detail-manage-resolver.service';

describe('DetailManageResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DetailManageResolverService = TestBed.get(DetailManageResolverService);
    expect(service).toBeTruthy();
  });
});
