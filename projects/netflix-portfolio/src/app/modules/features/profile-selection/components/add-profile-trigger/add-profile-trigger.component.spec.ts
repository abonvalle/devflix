import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProfileTriggerComponent } from './add-profile-trigger.component';

describe('AddProfileTriggerComponent', () => {
  let component: AddProfileTriggerComponent;
  let fixture: ComponentFixture<AddProfileTriggerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddProfileTriggerComponent]
    });
    fixture = TestBed.createComponent(AddProfileTriggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
