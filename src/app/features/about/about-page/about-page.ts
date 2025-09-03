import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Buttons } from '../../../shared/buttons/buttons';

import { MatExpansionModule } from '@angular/material/expansion';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { ServiceCard } from '../../home/home-page/home-page-model';
@Component({
  selector: 'app-about-page',
  imports: [Buttons, RouterModule, MatExpansionModule, FontAwesomeModule],
  templateUrl: './about-page.html',
  styleUrl: './about-page.scss'
})
export class AboutPage {
  readonly panelOpenState = signal(false);
  faArrow = faArrowRight;

  serviceType: ServiceCard[] = [
      {
        title: 'Weddings',
        image: 'assets/couple.jpg',
        link: '/portfolio/weddings'
      },
      {
        title: 'Engagements',
        image: 'assets/portrait.jpg',
        link: '/portfolio/engagements'
      },
      {
        title: 'Photoshoots',
        image: 'assets/details.jpg',
        link: '/portfolio/photoshoots'
      }
    ]
}
