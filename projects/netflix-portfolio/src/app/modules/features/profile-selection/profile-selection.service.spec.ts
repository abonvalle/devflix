import { TestBed } from '@angular/core/testing';

import { ProfileSelectionService } from './profile-selection.service';

describe('ProfileSelectionService', () => {
  let service: ProfileSelectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfileSelectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
