import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HidedProfilesSelectionDialogComponent } from './hided-profiles-selection-dialog.component';

describe('HidedProfilesSelectionDialogComponent', () => {
  let component: HidedProfilesSelectionDialogComponent;
  let fixture: ComponentFixture<HidedProfilesSelectionDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HidedProfilesSelectionDialogComponent]
    });
    fixture = TestBed.createComponent(HidedProfilesSelectionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
