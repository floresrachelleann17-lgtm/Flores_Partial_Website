import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelTipsComponent } from './travel-tips';

describe('Traveltips', () => {
  let component: TravelTipsComponent;
  let fixture: ComponentFixture<TravelTipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TravelTipsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TravelTipsComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
