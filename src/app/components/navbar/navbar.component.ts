import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  imports: [CommonModule, FontAwesomeModule],
})
export class NavbarComponent {
  faBars = faBars;
  navItems = [
    { link: '#', text: 'Para você' },
    { link: '#', text: 'Para empresas' },
    { link: '#', text: 'Ajuda' },
    { link: '#', text: 'Busca' },
  ];
}
