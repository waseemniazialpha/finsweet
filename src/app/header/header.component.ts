// header.component.ts
import { Component, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isMenuOpen = false;

  constructor(private renderer: Renderer2, private elementRef: ElementRef) {}

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;

    const menuContent = this.elementRef.nativeElement.querySelector('.menu-content');
    if (this.isMenuOpen) {
      this.renderer.addClass(menuContent, 'show');
    } else {
      this.renderer.removeClass(menuContent, 'show');
    }
  }

  // Add this HostListener to close the menu when the screen size is less than 767px
  @HostListener('window:resize', ['$event'])
  onWindowResize(event: Event) {
    const screenWidth = window.innerWidth;
    if (screenWidth < 768) {
      this.isMenuOpen = false;
      const menuContent = this.elementRef.nativeElement.querySelector('.menu-content');
      this.renderer.removeClass(menuContent, 'show');
    }
  }
}
