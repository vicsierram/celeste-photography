import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingOptions } from './booking-options';

describe('BookingOptions', () => {
  let component: BookingOptions;
  let fixture: ComponentFixture<BookingOptions>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookingOptions]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookingOptions);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
