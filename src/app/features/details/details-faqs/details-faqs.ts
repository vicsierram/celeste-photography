import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatExpansionModule } from '@angular/material/expansion';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Buttons } from '../../../shared/buttons/buttons';

@Component({
  selector: 'app-details-faqs',
  imports: [Buttons, MatExpansionModule, RouterModule, FontAwesomeModule],
  templateUrl: './details-faqs.html',
  styleUrl: './details-faqs.scss'
})
export class DetailsFaqs {
  faArrow = faArrowRight;

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
