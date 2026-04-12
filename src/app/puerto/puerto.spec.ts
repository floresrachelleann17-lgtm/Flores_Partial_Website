import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Puerto } from './puerto';

describe('Puerto', () => {
  let component: Puerto;
  let fixture: ComponentFixture<Puerto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Puerto],
    }).compileComponents();

    fixture = TestBed.createComponent(Puerto);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
