import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isMenuOpen = false;
  isChanged = false;
  toggleMenu() {
    this.isChanged = !this.isChanged;
    this.isMenuOpen = !this.isMenuOpen;
    const menu = document.querySelector('ul.menu');
    if (menu) {
      menu.classList.toggle('show');
    }
    
    
  }
  

  ngOnInit(): void {
 
  }


}
