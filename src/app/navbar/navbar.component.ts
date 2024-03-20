import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output, HostListener } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface link {
  name: string;
  route: string;
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  title = 'Ekart';
  sale = {
    value: 50,
    target: 'Everything',
  };
  searchText = '';
  links: link[] = [
    { name: 'Home', route: 'https://www.google.com' },
    { name: 'About', route: '' },
    { name: 'Cart', route: '' },
    { name: 'Sign In', route: '' },
  ];
  isScrolled: boolean = false; // Flag to track scroll state

  @HostListener('window:scroll', [])
  onScroll(): void {
    this.isScrolled = window.scrollY > 0; // Update flag based on scroll position
  }
  @Output()
  searchTerm: EventEmitter<string> = new EventEmitter<string>();

  handleInputSearch(event: any) {
    this.searchTerm.emit(event.target.value);
  }

  getSaleText() {
    return `get upto ${this.sale.value}% off on ${this.sale.target} !!`;
  }
}
