import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarsWrapperComponent } from './calendars-wrapper.component';

describe('CalendarsWrapperComponent', () => {
  let component: CalendarsWrapperComponent;
  let fixture: ComponentFixture<CalendarsWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalendarsWrapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarsWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
