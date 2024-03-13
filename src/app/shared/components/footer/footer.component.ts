import { Component } from '@angular/core';
import { SharedService } from '../../services/shared.service';
import { MenuItems } from '../../interfaces/menu-item.interface';

@Component({
  selector: 'shared-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  public menuItems: MenuItems[];

  constructor( private sharedServcice: SharedService ) {
    this.menuItems = this.sharedServcice.getMenuItems();
  }

}
