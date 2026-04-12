import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-travel-tips',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './travel-tips.html',
  styleUrls: ['./travel-tips.css']
})
export class TravelTipsComponent implements OnInit { // Add "implements OnInit"
  
  ngOnInit() {
    // This command tells the browser: "The moment this page loads, jump to the top!"
    window.scrollTo(0, 0);
  } 
  tips = [
    {
      title: 'Money & Currency',
      icon: 'fa-solid fa-money-bill-transfer',
      description: 'Cash is king in Palawan! Most local stores and boatmen don’t accept cards. ATMs are rare in El Nido and Coron, so withdraw your Pesos (PHP) in Puerto Princesa or Manila before heading out.'
    },
    {
      title: 'Best Time to Visit',
      icon: 'fa-solid fa-cloud-sun',
      description: 'The "Dry Season" is from November to May. This is when the water is crystal clear and calm. Avoid the monsoon season (July-September) as tours often get cancelled due to waves.'
    },
    {
      title: 'Eco-Etiquette',
      icon: 'fa-solid fa-leaf',
      description: 'Palawan is a UNESCO Biosphere Reserve. Strictly no touching of corals, no littering, and no taking of sand or shells. Use reef-safe sunscreen to protect the marine life.'
    },
    {
      title: 'Island Essentials',
      icon: 'fa-solid fa-kit-medical',
      description: 'Pack a 10L or 20L dry bag for your island hopping. Also, bring aqua shoes—the limestone rocks and sea urchins can be very sharp!'
    },
    {
      title: 'Connectivity',
      icon: 'fa-solid fa-wifi',
      description: 'Wi-Fi can be spotty in remote lagoons. Buy a local SIM card (Globe or Smart) and load it with data, but expect "Digital Detox" moments in the hidden valleys.'
    },
    {
      title: 'Health & Safety',
      icon: 'fa-solid fa-faucet-dotted',
      description: 'Never drink tap water. Stick to bottled or filtered water provided by your hotel to avoid "traveler’s tummy." Always wear a life vest during boat transfers.'
    }
  ];
}