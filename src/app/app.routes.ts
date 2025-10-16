import { Routes } from '@angular/router';
import { HomePage } from './features/home/home-page/home-page';
import { PortfolioOverview } from './features/portfolio/portfolio-overview/portfolio-overview';
import { PortfolioGallery } from './features/portfolio/portfolio-gallery/portfolio-gallery';
import { AboutPage } from './features/about/about-page/about-page';
import { BookingOptions } from './features/booking/booking-options/booking-options';
import { DetailsPage } from './features/details/details-page/details-page';
import { ContactPage } from './features/contact/contact-page/contact-page';
import { ContactSuccess } from './features/contact/contact-success/contact-success';
import { ErrorPage } from './shared/error-page/error-page';
import { DetailsApproach } from './features/details/details-approach/details-approach';
import { DetailsServices } from './features/details/details-services/details-services';
import { DetailsFaqs } from './features/details/details-faqs/details-faqs';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: HomePage
    },
    {
        path: 'portfolio',
        component: PortfolioOverview,
    },
    {
        path: 'portfolio/:category',
        component: PortfolioOverview,
    },
    {
        path: 'portfolio/gallery/:id',
        component: PortfolioGallery
    },
    {
        path: 'about',
        component: AboutPage
    },
    {
        path: 'details',
        component: DetailsPage
    },
    {
        path: 'details/approach',
        component: DetailsApproach
    },
    {
        path: 'details/services',
        component: DetailsServices
    },
    {
        path: 'details/faqs',
        component: DetailsFaqs
    },
    {
        path: 'contact',
        component: ContactPage
    },
    {
        path: 'contact-success',
        component: ContactSuccess
    },
    {
        path: '**',
        component: ErrorPage
    }
    // {
    //     path: 'booking',
    //     component: BookingOptions
    // },
];
