import { TestBed } from '@angular/core/testing';

import { HidedProfilesSelectionDialogService } from './hided-profiles-selection-dialog.service';

describe('HidedProfilesSelectionDialogService', () => {
  let service: HidedProfilesSelectionDialogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HidedProfilesSelectionDialogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
