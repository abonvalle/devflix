import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDetailsHeaderComponent } from './card-details-header.component';

describe('CardDetailsHeaderComponent', () => {
  let component: CardDetailsHeaderComponent;
  let fixture: ComponentFixture<CardDetailsHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardDetailsHeaderComponent]
    });
    fixture = TestBed.createComponent(CardDetailsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
