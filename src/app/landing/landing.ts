import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [RouterModule, CommonModule], 
  templateUrl: './landing.html',
  styleUrl: './landing.css'
})
export class LandingComponent implements OnInit { // Add "implements OnInit"
  
  ngOnInit() {
    // This command tells the browser: "The moment this page loads, jump to the top!"
    window.scrollTo(0, 0);
  }
  activeIndex = 0;

 
  destinations = [
    { name: 'Snake Island', location: 'El Nido', img: '/images/Snake_Island.jpg' },
    { name: 'Banol beach', location: 'Coron', img: '/images/banol.jpg' },
    { name: 'Daluyon Beach', location: 'Puerto Princesa', img: '/images/Daluyon.jpg' },
    { name: 'Sunset Colors', location: 'Port Barton', img: '/images/sunset_colors.jpg' },
    { name: 'Underground River', location: 'Puerto Princesa', img: '/images/underground_river.jpg' },
    { name: 'Forta Santa Isabel', location: 'Taytay', img: '/images/forta_santa_isabel.jpg' },
    { name: 'Nagtabon Beach', location: 'Puerto Princesa', img: '/images/nagtabon.jpg' },
    { name: 'Las Cabanas', location: 'El Nido', img: '/images/las_cabanas.jpg' }
  ];

  next() {
    this.activeIndex = (this.activeIndex + 1) % this.destinations.length;
  }

  prev() {
    this.activeIndex = (this.activeIndex - 1 + this.destinations.length) % this.destinations.length;
  }

 
  getCardClass(index: number) {
    const total = this.destinations.length;
    if (index === this.activeIndex) return 'card-active';
    if (index === (this.activeIndex - 1 + total) % total) return 'card-prev';
    if (index === (this.activeIndex + 1) % total) return 'card-next';
    return 'card-hidden';
  }

  scrollToDestinations() {
    const element = document.querySelector('.destinations');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}