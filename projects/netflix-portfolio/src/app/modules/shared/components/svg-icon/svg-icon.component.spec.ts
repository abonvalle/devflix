import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgIconComponent } from './svg-icon.component';

describe('SvgIconComponentComponent', () => {
  let component: SvgIconComponent;
  let fixture: ComponentFixture<SvgIconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SvgIconComponent]
    });
    fixture = TestBed.createComponent(SvgIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
