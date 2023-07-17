import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isMenuOpen = false;

  constructor(private renderer: Renderer2, private elementRef: ElementRef) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;

    // Add or remove a CSS class to show or hide the menu
    const menuContent = this.elementRef.nativeElement.querySelector('.menu-content');
    if (this.isMenuOpen) {
      this.renderer.addClass(menuContent, 'show');
    } else {
      this.renderer.removeClass(menuContent, 'show');
    }
  }

    
  }
  

 


