import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-elnido',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './elnido.html',
  styleUrl: './elnido.css'
})
export class ElnidoComponent implements OnInit { // Add "implements OnInit"
  
  ngOnInit() {
    // This command tells the browser: "The moment this page loads, jump to the top!"
    window.scrollTo(0, 0);
  }
  // 6 Destinations (3 per row)
  elNidoSpots = [
    { id: 'snake-island', name: 'Snake Island', category: 'Sandbars & Views', image: '/images/snake.jpg' },
    { id: 'las-cabanas', name: 'Las Cabanas', category: 'Beaches & Zipline', image: '/images/las_cabanas.jpg' },
    { id: 'big-lagoon', name: 'Big Lagoon', category: 'Bodies of Water', image: '/images/big_lagoon.jpg' },
    { id: 'small-lagoon', name: 'Small Lagoon', category: 'Bodies of Water', image: '/images/small_lagoon.jpg' },
    { id: 'hidden-beach', name: 'Hidden Beach', category: 'Coves & Snorkeling', image: '/images/hidden_beach.jpg' },
    { id: 'taraw-cliff', name: 'Taraw Cliff', category: 'Hiking & Adventure', image: '/images/taraw_cliff.jpg' }
  ];

  // 3 Accommodations (1 row)
  accommodations = [
    { id: 'funny-lion', name: 'The Funny Lion', location: 'El Nido Town', image: '/images/funny_lion.jpg' },
    { id: 'nacpan-glamping', name: 'Nacpan Beach Glamping', location: 'Nacpan Beach', image: '/images/glamping.jpg' },
    { id: 'miniloc-resort', name: 'Miniloc Island Resort', location: 'Miniloc Island', image: '/images/miniloc.jpg' }
  ];
}