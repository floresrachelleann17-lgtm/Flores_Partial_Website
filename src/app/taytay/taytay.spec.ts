import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Taytay } from './taytay';

describe('Taytay', () => {
  let component: Taytay;
  let fixture: ComponentFixture<Taytay>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Taytay],
    }).compileComponents();

    fixture = TestBed.createComponent(Taytay);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
