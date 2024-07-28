import { Component } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css'],
})
export class SideNavComponent {
  selectedButton: string = '';
  sidenavExpanded: boolean = false;
  isMobile: boolean = window.innerWidth <= 600;

  toggleSidenav() {
    this.sidenavExpanded = !this.sidenavExpanded;
  }

  /////

  abrirSidenav() {
    this.sidenavExpanded = true;
  }

  fecharSidenav() {
    this.sidenavExpanded = false;
  }

  setSelectedButton(button: string) {
    this.selectedButton = button;
  }
}
