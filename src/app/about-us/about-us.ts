import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnInit } from '@angular/core';


@Component({ 
  selector: 'app-about-us',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-us.html',
  styleUrls: ['./about-us.css']
})
export class AboutUsComponent implements OnInit { // Add "implements OnInit"
  
  ngOnInit() {
    // This command tells the browser: "The moment this page loads, jump to the top!"
    window.scrollTo(0, 0);
  }
  // Data for your "Values" cards to keep the HTML clean (Angular Best Practice)
  companyValues = [
    {
      icon: 'fa-earth-asia',
      title: 'Authenticity',
      description: 'We provide real tips from local perspectives and first-hand experiences.'
    },
    {
      icon: 'fa-heart',
      title: 'Passion',
      description: 'We love Palawan and our mission is to make you fall in love with it too.'
    },
    {
      icon: 'fa-shield-halved',
      title: 'Reliability',
      description: 'Curated locations and verified travel advice you can trust for your journey.'
    }
  ];

  constructor() {}
}