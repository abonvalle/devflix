import { TestBed } from '@angular/core/testing';

import { ProfilesService } from '../../shared/services/profile-selection.service';

describe('ProfileSelectionService', () => {
  let service: ProfilesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfilesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
