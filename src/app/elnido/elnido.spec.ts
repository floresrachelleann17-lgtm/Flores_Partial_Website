import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElnidoComponent } from './elnido';

describe('Elnido', () => {
  let component: ElnidoComponent;
  let fixture: ComponentFixture<ElnidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElnidoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ElnidoComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
