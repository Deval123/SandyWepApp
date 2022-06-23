import { TestBed } from '@angular/core/testing';

import { SandyResourceService } from './sandy-resource.service';

describe('SandyResourceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SandyResourceService = TestBed.get(SandyResourceService);
    expect(service).toBeTruthy();
  });
});
