import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsApproach } from './details-approach';

describe('DetailsApproach', () => {
  let component: DetailsApproach;
  let fixture: ComponentFixture<DetailsApproach>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailsApproach]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsApproach);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
