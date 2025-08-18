import { Component, model } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { provideNativeDateAdapter } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHeart, faArrowRight, faClock, faImagePortrait, faImages, faEarthAmericas } from '@fortawesome/free-solid-svg-icons';

import { ServiceCard, PackageCard } from './home-page-model';
import { Buttons } from '../../../shared/buttons/buttons';

@Component({
  selector: 'app-home-page',
  providers: [provideNativeDateAdapter()],
  imports: [
    CommonModule, 
    RouterModule, 
    FormsModule, 
    MatFormFieldModule, 
    MatSelectModule, 
    MatInputModule, 
    MatCardModule, 
    MatDatepickerModule, 
    FontAwesomeModule, 
    Buttons
  ],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss'
})
export class HomePage {
  faHeart = faHeart;
  faArrow = faArrowRight;
  faClock = faClock;
  faImage = faImagePortrait;
  faImages = faImages;
  faGlobe = faEarthAmericas;

  minDate: Date;
  selected = model<Date | null>(null);

  serviceType: ServiceCard[] = [
    {
      title: 'Weddings',
      image: 'assets/couple.jpg',
      link: '/portfolio'
    },
    {
      title: 'Engagements',
      image: 'assets/portrait.jpg',
      link: '/portfolio'
    },
    {
      title: 'Photoshoots',
      image: 'assets/details.jpg',
      link: '/portfolio'
    }
  ]

  packageType: PackageCard[] = [
    {
      title: 'Wedding Packages',
      image: 'assets/couple.jpg',
      link: '/portfolio/weddings',
      gradientFrom: 'from-yellow',
      gradientVia: 'via-yellow-mid/80'
    },
    {
      title: 'Engagement Packages',
      image: 'assets/detwedd.jpg',
      link: '/portfolio/engagements',
      gradientFrom: 'from-pink',
      gradientVia: 'via-pink-mid/80'
    },
    {
      title: 'Photoshoot Packages',
      image: 'assets/details.jpg',
      link: '/portfolio/photoshoots',
      gradientFrom: 'from-sand',
      gradientVia: 'via-green-mid/80'
    }
  ]

  constructor() {
    this.minDate = new Date();
  }
}
