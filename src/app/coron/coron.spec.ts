import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Coron } from './coron';

describe('Coron', () => {
  let component: Coron;
  let fixture: ComponentFixture<Coron>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Coron],
    }).compileComponents();

    fixture = TestBed.createComponent(Coron);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
