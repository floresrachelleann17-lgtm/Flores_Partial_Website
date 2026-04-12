import { Component, AfterViewInit, OnInit } from '@angular/core'; // 1. Add OnInit here
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

declare const google: any;

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent implements OnInit, AfterViewInit { // 2. Add OnInit to implements

  // 3. Create the ngOnInit method
  ngOnInit() {
    // Ensures the page starts at the top when navigating back home
    window.scrollTo(0, 0);
  }

  ngAfterViewInit() {
    this.initMap();
  }

  initMap() {
    const map = (window as any).L.map('google-map-container').setView([10.9, 119.7], 7);

    (window as any).L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    const locations = [
      { name: "El Nido", lat: 11.1955, lng: 119.4075 },
      { name: "Coron", lat: 12.0042, lng: 120.2014 },
      { name: "Puerto Princesa", lat: 9.7392, lng: 118.7353 },
      { name: "Port Barton", lat: 10.4468, lng: 119.1672 },
      { name: "Taytay", lat: 10.8258, lng: 119.5153 }
    ];

    locations.forEach(loc => {
      (window as any).L.marker([loc.lat, loc.lng])
        .addTo(map)
        .bindPopup(`<b>${loc.name}</b><br>Palawan Bliss Destination.`)
    });
  }

  onExplore() {
    console.log("Exploring all locations...");
    const element = document.getElementById('locations-grid-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  onFilterChange(event: any) {
    const selectedValue = (event.target as HTMLSelectElement).value;
    console.log("Filtering for:", selectedValue);
  }

  onSearch(value: string) {
    console.log("Searching for:", value);
  }
  
}