import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsList2Component } from './cards-list2.component';

describe('CardsList2Component', () => {
  let component: CardsList2Component;
  let fixture: ComponentFixture<CardsList2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardsList2Component]
    });
    fixture = TestBed.createComponent(CardsList2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
