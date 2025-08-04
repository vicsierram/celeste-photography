import { Routes } from '@angular/router';
import { HomePage } from './features/home/home-page/home-page';
import { PortfolioOverview } from './features/portfolio/portfolio-overview/portfolio-overview';
import { PortfolioGallery } from './features/portfolio/portfolio-gallery/portfolio-gallery';
import { AboutPage } from './features/about/about-page/about-page';
import { BookingOptions } from './features/booking/booking-options/booking-options';
import { DetailsPage } from './features/details/details-page/details-page';
import { ContactPage } from './features/contact/contact-page/contact-page';

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
        path: 'portfolio/gallery',
        component: PortfolioGallery
    },
    {
        path: 'about',
        component: AboutPage
    },
    {
        path: 'booking',
        component: BookingOptions
    },
    {
        path: 'details',
        component: DetailsPage
    },
    {
        path: 'contact',
        component: ContactPage
    }
];
