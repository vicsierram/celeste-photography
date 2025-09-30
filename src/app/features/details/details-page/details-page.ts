import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatExpansionModule } from '@angular/material/expansion';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowRight, faTimeline, faTag, faComments, faCircleCheck } from '@fortawesome/free-solid-svg-icons';

import { Buttons } from '../../../shared/buttons/buttons';

type Step = {
  step: number;
  eyebrow: string;
  title: string;
  copy: string;
};

interface ServicePlan {
  name: string;
  details: { label: string; value: string }[];
  priceUSD: string;
  priceMXN: string;
  CTA: string;
}
@Component({
  selector: 'app-details-page',
  imports: [CommonModule, Buttons, MatExpansionModule, FontAwesomeModule, RouterModule],
  templateUrl: './details-page.html',
  styleUrl: './details-page.scss'
})
export class DetailsPage {
  faArrow = faArrowRight;
  faMethod = faTimeline;
  faServices = faTag;
  faFaqs = faComments;
  faCheck = faCircleCheck;
  selectedPlan: number = 0;
  steps: Step[] = [
    {
      step: 1, eyebrow: 'Inquiry', title: 'Say hello',
      copy: 'Share your date, location, and vision. We confirm availability and fit.'
    },
    {
      step: 2, eyebrow: 'Call', title: 'Discovery call',
      copy: 'We align on style, priorities, and logistics.'
    },
    {
      step: 3, eyebrow: 'Booked', title: 'Secure the date',
      copy: 'Agreement + retainer. You’re officially on the calendar.'
    },
    {
      step: 4, eyebrow: 'Before', title: 'Engagement session',
      copy: 'A relaxed session to get comfortable together.'
    },
    {
      step: 5, eyebrow: 'Wedding', title: 'The big day',
      copy: 'Calm, unobtrusive coverage with editorial direction when needed.'
    },
    {
      step: 6, eyebrow: 'After', title: 'Gallery delivery',
      copy: 'Sneak peek within days; full, edited gallery in weeks.'
    },
  ];

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
      CTA: 'Book Full Coverage'
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
      CTA: 'Book Civil Ceremony'
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
      CTA: 'Book Photo Only'
    }
  ];

  faqs = [
    {
      question: 'How far in advance should we book you?',
      answer: 'Most couples book 9–12 months in advance, but last-minute dates may also be available.'
    },
    {
      question: 'Do you travel for weddings or shoots?',
      answer: 'Yes! We love destination weddings and travel worldwide. Travel fees depend on the location.'
    },
    {
      question: 'How many photos will we get?',
      answer: 'On average, you can expect +800 edited images for a full-day wedding. You can check our Services & Pricing section for more details.'
    },
    {
      question: 'Do you work with a second shooter?',
      answer: 'Yes! For full wedding coverage, I always work with a trusted second shooter to ensure no moment is missed. For other services, a second shooter can be requested if desired.'
    },
    {
      question: 'Do you also offer video?',
      answer: 'I focus fully on photography so I can give every detail my attention. That said, I collaborate with talented videographers whose services are included in some of our packages, or can be add ons if needed.'
    },
    {
      question: 'When will we receive our photos?',
      answer: 'You’ll receive a sneak peek within 1-2 weeks, and the full gallery in 4–6 weeks.'
    },
    {
      question: 'Do you charge travel fees?',
      answer: 'Travel within Guadalajara is included in all of my collections. For weddings or sessions outside the city, travel fees may apply depending on the location. I’ll always provide a clear estimate upfront, so there are no surprises.'
    },
    {
      question: 'Do you offer albums and prints?',
      answer: 'Absolutely. We design timeless albums and offer fine art prints to preserve your memories.'
    }
  ];
}
