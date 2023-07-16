import { Component } from '@angular/core';

import { faBell, faInfoCircle, faClose } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  isOpen= false;
  isOpenBody = false;

  faBell = faBell;
  faInfoCircle = faInfoCircle;
  faClose = faClose;
}
