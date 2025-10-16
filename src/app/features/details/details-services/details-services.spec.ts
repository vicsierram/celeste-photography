import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsServices } from './details-services';

describe('DetailsServices', () => {
  let component: DetailsServices;
  let fixture: ComponentFixture<DetailsServices>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailsServices]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsServices);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
