import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faInstagram, faPinterestP } from '@fortawesome/free-brands-svg-icons';
import { faEarthAmericas } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  imports: [RouterModule, MatIconModule, MatButtonModule, MatToolbarModule, MatMenuModule, FontAwesomeModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar {
  faInstagram = faInstagram;
  faPinterestP = faPinterestP;
  faGlobe = faEarthAmericas;
}
