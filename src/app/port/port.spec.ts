import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Port } from './port';

describe('Port', () => {
  let component: Port;
  let fixture: ComponentFixture<Port>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Port],
    }).compileComponents();

    fixture = TestBed.createComponent(Port);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
