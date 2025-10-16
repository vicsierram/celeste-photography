import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowRight, faTimeline, faTag, faComments, faCircleCheck } from '@fortawesome/free-solid-svg-icons';

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
  imports: [CommonModule, FontAwesomeModule, RouterModule],
  templateUrl: './details-page.html',
  styleUrl: './details-page.scss'
})
export class DetailsPage {
  faArrow = faArrowRight;
  faMethod = faTimeline;
  faServices = faTag;
  faFaqs = faComments;
  faCheck = faCircleCheck;

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
}
