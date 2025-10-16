import { Component, inject, model } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHeart, faQuoteLeft, faTruckFast, faPenToSquare, faHeadset, faArrowRight, faClock, faImagePortrait, faImages, faEarthAmericas } from '@fortawesome/free-solid-svg-icons';

import { ServicesCard } from './home-page-model';
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
  private router = inject(Router);
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

  serviceType: ServicesCard[] = [
    {
      title: 'Weddings',
      image: 'assets/b&w1.jpg',
      path: '/portfolio/weddings'
    },
    {
      title: 'Sessions',
      image: 'assets/clients-4.jpg',
      path: '/portfolio/engagements'
    },
    {
      title: 'Custom',
      image: 'assets/custsect.jpg',
      path: '/portfolio/photoshoots'
    }
  ]

  portfolioGrid: string[] = [
    'assets/portrait.jpg',
    'assets/clients-4.jpg',
    'assets/couple.jpg',
    'assets/clients-1.jpg',
    'assets/details.jpg',
    'assets/detwedd.jpg',
    'assets/couple.jpg',
    'assets/welcome.jpg',
    'assets/clients-4.jpg',
    'assets/hor-2.jpg',
    'assets/details.jpg',
    'assets/hor-3.jpg',
    'assets/clients-2.jpg',
    'assets/welcome.jpg',
    'assets/portrait.jpg',
    'assets/welcome.jpg'
  ]

  packageType: ServicesCard[] = [
    {
      title: 'My approach',
      image: 'assets/b&w1.jpg',
      path: '/details/approach'
    },
    {
      title: 'Services & Pricing',
      image: 'assets/detwedd.jpg',
      path: '/details/services'
    },
    {
      title: 'FAQs',
      image: 'assets/details.jpg',
      path: '/details/faqs'
    }
  ]

  constructor() {
    this.minDate = new Date();
  }
}
