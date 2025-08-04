import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faInstagram, faPinterestP } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  imports: [RouterModule, FontAwesomeModule],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class Footer {
  faInstagram = faInstagram;
  faPinterest = faPinterestP;
  currentYear = new Date().getFullYear();
}
