import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatRadioModule } from '@angular/material/radio';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faInstagram, faPinterestP } from '@fortawesome/free-brands-svg-icons';
import { faEarthAmericas } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  imports: [RouterModule, FormsModule, MatIconModule, MatButtonModule, MatMenuModule, MatRadioModule, FontAwesomeModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar {
  faInstagram = faInstagram;
  faPinterestP = faPinterestP;
  faGlobe = faEarthAmericas;

  menuOpen = false;
  language: string = 'español';
  langs: string[] = ['español', 'english'];

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }
}
