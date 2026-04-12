import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './contact.html',
  styleUrls: ['./contact.css']
})
export class ContactComponent implements OnInit { // Add "implements OnInit"
  
  ngOnInit() {
    // This command tells the browser: "The moment this page loads, jump to the top!"
    window.scrollTo(0, 0);
  } 
  
  onSendMessage(name: HTMLInputElement, email: HTMLInputElement, msg: HTMLTextAreaElement) {
    if (name.value && email.value && msg.value) {
      // Logic: Save to local storage so you can "show" the messages later if needed
      const newMessage = {
        from: name.value,
        email: email.value,
        text: msg.value,
        date: new Date().toLocaleString()
      };

      // Get old messages or start a new list
      const existingMsgs = JSON.parse(localStorage.getItem('messages') || '[]');
      existingMsgs.push(newMessage);
      localStorage.setItem('messages', JSON.stringify(existingMsgs));

      alert("Thank you! Your message to PalawanBliss has been sent.");
      
      // Clear the form
      name.value = '';
      email.value = '';
      msg.value = '';
    } else {
      alert("Please fill in all fields.");
    }
  }
}