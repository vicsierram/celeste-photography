import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Buttons } from '../../../shared/buttons/buttons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowRight, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { RouterModule } from '@angular/router';

interface ServicePlan {
  name: string;
  details: { label: string; value: string }[];
  priceUSD: string;
  priceMXN: string;
  CTA: string;
}

@Component({
  selector: 'app-details-services',
  imports: [Buttons, CommonModule, FontAwesomeModule, RouterModule],
  templateUrl: './details-services.html',
  styleUrl: './details-services.scss'
})
export class DetailsServices {
  selectedPlan: number = 0;
  faCheck = faCheckCircle;
  faArrow = faArrowRight

  weddingPlans: ServicePlan[] = [
    {
      name: 'Full Wedding Coverage',
      details: [
        { label: 'Gift', value: 'Gifted couple session' },
        { label: 'Coverage', value: '12 hour coverage' },
        { label: 'Team', value: 'Photography & Video team' },
        { label: 'Photos', value: '800+ edited photos' },
        { label: 'Video', value: 'Highlight reel & 15 min video' },
        { label: 'Delivery', value: 'Online gallery' },
        { label: 'Delivery Time', value: '4-6 weeks delivery' }
      ],
      priceUSD: '$4,200 USD',
      priceMXN: '$75,000 MXN',
      CTA: 'Request to book'
    },
    {
      name: 'Civil Ceremony',
      details: [
        { label: 'Gift', value: 'Gifted couple session' },
        { label: 'Coverage', value: '4 hour coverage' },
        { label: 'Team', value: 'Photography & Video team' },
        { label: 'Photos', value: '400+ edited photos' },
        { label: 'Video', value: '5 min video' },
        { label: 'Delivery', value: 'Online gallery' },
        { label: 'Delivery Time', value: '4-6 weeks delivery' }
      ],
      priceUSD: '$1,400 USD',
      priceMXN: '$25,000 MXN',
      CTA: 'Request to book'
    },
    {
      name: 'Photography Only',
      details: [
        { label: 'Gift', value: 'Gifted couple session' },
        { label: 'Coverage', value: '12 hour coverage' },
        { label: 'Team', value: 'Photography' },
        { label: 'Photos', value: '800+ edited' },
        { label: 'Delivery', value: 'Online gallery' },
        { label: 'Delivery Time', value: '4-6 weeks delivery' }
      ],
      priceUSD: '$2,100 USD',
      priceMXN: '$37,500 MXN',
      CTA: 'Request to book'
    }
  ];
}
