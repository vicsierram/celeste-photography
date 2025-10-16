import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Buttons } from '../../../shared/buttons/buttons';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-about-page',
  imports: [Buttons, RouterModule, FontAwesomeModule],
  templateUrl: './about-page.html',
  styleUrl: './about-page.scss'
})
export class AboutPage {
  faArrow = faArrowRight;
}
