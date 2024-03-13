import { Injectable } from '@angular/core';
import { MenuItems } from '../interfaces/menu-item.interface';


@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private menuItems: MenuItems[] = [
    { title: 'Inicio', url: '/home' },
    { title: 'Nosotros', url: '/about' },
    { title: 'Portafolio', url: '/portfolio' },
    // { title: 'Contacto', url: '/contact' },
  ];

  constructor() { }

  getMenuItems() {
    return this.menuItems;
  }
}
