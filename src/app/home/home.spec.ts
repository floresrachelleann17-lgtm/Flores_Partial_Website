import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home'; 
import { RouterTestingModule } from '@angular/router/testing';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
  
    (window as any).google = {
      maps: {
        Map: class { setOptions() {} },
        Marker: class {},
        Animation: { DROP: 1 }
      }
    };

    await TestBed.configureTestingModule({
      imports: [
        HomeComponent, 
        RouterTestingModule 
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});