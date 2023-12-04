import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatMenuHoverComponent } from './mat-menu-hover.component';

describe('MatMenuHoverComponent', () => {
  let component: MatMenuHoverComponent;
  let fixture: ComponentFixture<MatMenuHoverComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MatMenuHoverComponent]
    });
    fixture = TestBed.createComponent(MatMenuHoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
