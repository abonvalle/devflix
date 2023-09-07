import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileThumbnailComponent } from './profile-thumbnail.component';

describe('ProfileThumbnailComponent', () => {
  let component: ProfileThumbnailComponent;
  let fixture: ComponentFixture<ProfileThumbnailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileThumbnailComponent]
    });
    fixture = TestBed.createComponent(ProfileThumbnailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
