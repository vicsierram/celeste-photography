import { Component, model } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHeart, faQuoteLeft, faTruckFast, faPenToSquare, faHeadset, faArrowRight, faClock, faImagePortrait, faImages, faEarthAmericas } from '@fortawesome/free-solid-svg-icons';

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
  faHeadset = faHeadset;
  faEdit = faPenToSquare;
  faDelivery = faTruckFast;
  faQuote = faQuoteLeft;

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

  portfolioGrid: string[] = [
    'assets/portrait.jpg',
    'assets/celeste.jpg',
    'assets/couple.jpg',
    'assets/about.jpg',
    'assets/details.jpg',
    'assets/detwedd.jpg',
    'assets/couple.jpg',
    'assets/welcome.jpg',
    'assets/celeste.jpg',
    'assets/welcome.jpg',
    'assets/details.jpg',
    'assets/detwedd.jpg',
    'assets/about.jpg',
    'assets/welcome.jpg',
    'assets/portrait.jpg',
    'assets/welcome.jpg'
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
