import { Component, HostListener } from '@angular/core';
import gsap from 'gsap';
import { SharedService } from '../../services/shared.service';
import { MenuItems } from '../../interfaces/menu-item.interface';



@Component({
  selector: 'shared-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
})
export class NavBarComponent {

  public showMobileMenu: boolean = false;
  public menuItems: MenuItems[];
  private navHidden: boolean = false;
  private lastScrollPosition: number = 0;

  constructor( private sharedService: SharedService ){
    this.menuItems = this.sharedService.getMenuItems();
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event) {
    const currentScrollPosition = window.pageYOffset;
    const navbarElement = document.getElementById('navbar');

    if (navbarElement) {
      const navbarHeight = navbarElement.offsetHeight + 10;

      // Toggle background color using GSAP
      gsap.to(navbarElement, {
        backgroundColor:
          currentScrollPosition > navbarHeight ? 'rgba(7, 17, 48, 0.8)' : 'transparent',
        duration: 0.5,
      });
    }

    if (currentScrollPosition < this.lastScrollPosition) {
      this.navHidden = false; // Scrolling up
    } else {
      this.navHidden = true; // Scrolling down
      this.showMobileMenu = false; // Hide mobile menu when scrolling down
    }
    this.lastScrollPosition = currentScrollPosition;

    gsap.to('#navbar', { duration: 0.5, y: this.navHidden ? -100 : 0 });
  }

  toggleMobileMenu() {
    this.showMobileMenu = !this.showMobileMenu;
  }
}
