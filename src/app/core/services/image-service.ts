import { Injectable } from '@angular/core';
export const PORTFOLIO_CATEGORIES = ['weddings', 'engagements', 'photoshoots'] as const;
export type PortfolioCategory = typeof PORTFOLIO_CATEGORIES[number];

export interface PortfolioItem {
  id: string;
  category: PortfolioCategory;
  title: string;
  coverUrl: string;
  location: string;
}

export interface PortfolioDetails extends PortfolioItem {
  description: string;
  hero: string;
  images: string[];
}

@Injectable({
  providedIn: 'root'
})

export class ImageService {
  private portfolio: PortfolioDetails[] = [
    {
      id: '1',
      category: 'weddings',
      title: 'Celeste & Charles',
      coverUrl: 'assets/clients-1.jpg',
      location: 'Guadalajara, Jal.',
      description: 'A beautiful outdoor ceremony surrounded by vineyards',
      hero: 'assets/detwedd.jpg',
      images: [
        'assets/clients-1.jpg',
        'assets/clients-2.jpg',
        'assets/clients-3.jpg',
        'assets/clients-4.jpg',
        'assets/detwedd.jpg',
        'assets/clients-1.jpg',
        'assets/couple.jpg',
        'assets/portrait.jpg',
        'assets/clients-1.jpg',
        'assets/clients-4.jpg',
        'assets/details.jpg',
        'assets/clients-3.jpg',
        'assets/detwedd.jpg',
        'assets/clients-2.jpg',
        'assets/couple.jpg',
        'assets/detwedd.jpg',
        'assets/clients-2.jpg',
        'assets/welcome.jpg',
        'assets/clients-4.jpg',
        'assets/detwedd.jpg',
      ]
    },
    {
      id: '2',
      category: 'weddings',
      title: 'Celeste & Charles',
      coverUrl: 'assets/clients-2.jpg',
      location: 'Tuscany, Italy',
      description: 'A beautiful outdoor ceremony surrounded by vineyards',
      hero: 'assets/hor-1.jpg',
      images: [
        'assets/clients-1.jpg',
        'assets/clients-2.jpg',
        'assets/clients-3.jpg',
        'assets/clients-4.jpg',
        'assets/detwedd.jpg',
        'assets/clients-1.jpg',
        'assets/couple.jpg',
        'assets/portrait.jpg',
        'assets/clients-1.jpg',
        'assets/clients-4.jpg',
        'assets/details.jpg',
        'assets/clients-3.jpg',
        'assets/detwedd.jpg',
        'assets/clients-2.jpg',
        'assets/couple.jpg',
        'assets/detwedd.jpg',
        'assets/clients-2.jpg',
        'assets/welcome.jpg',
        'assets/clients-4.jpg',
        'assets/detwedd.jpg',
      ]
    },
    {
      id: '3',
      category: 'weddings',
      title: 'Celeste & Charles',
      coverUrl: 'assets/clients-3.jpg',
      location: 'Guadalajara, Jal.',
      description: 'A beautiful outdoor ceremony surrounded by vineyards',
      hero: 'assets/hor-2.jpg',
      images: [
        'assets/clients-1.jpg',
        'assets/clients-2.jpg',
        'assets/clients-3.jpg',
        'assets/clients-4.jpg',
        'assets/detwedd.jpg',
        'assets/clients-1.jpg',
        'assets/couple.jpg',
        'assets/portrait.jpg',
        'assets/clients-1.jpg',
        'assets/clients-4.jpg',
        'assets/details.jpg',
        'assets/clients-3.jpg',
        'assets/detwedd.jpg',
        'assets/clients-2.jpg',
        'assets/couple.jpg',
        'assets/detwedd.jpg',
        'assets/clients-2.jpg',
        'assets/welcome.jpg',
        'assets/clients-4.jpg',
        'assets/detwedd.jpg',
      ]
    },
    {
      id: '4',
      category: 'weddings',
      title: 'Celeste & Charles',
      coverUrl: 'assets/clients-4.jpg',
      location: 'Guadalajara, Jal.',
      description: 'A beautiful outdoor ceremony surrounded by vineyards',
      hero: 'assets/hor-3.jpg',
      images: [
        'assets/clients-1.jpg',
        'assets/clients-2.jpg',
        'assets/clients-3.jpg',
        'assets/clients-4.jpg',
        'assets/detwedd.jpg',
        'assets/clients-1.jpg',
        'assets/couple.jpg',
        'assets/portrait.jpg',
        'assets/clients-1.jpg',
        'assets/clients-4.jpg',
        'assets/details.jpg',
        'assets/clients-3.jpg',
        'assets/detwedd.jpg',
        'assets/clients-2.jpg',
        'assets/couple.jpg',
        'assets/detwedd.jpg',
        'assets/clients-2.jpg',
        'assets/welcome.jpg',
        'assets/clients-4.jpg',
        'assets/detwedd.jpg',
      ]
    },
    {
      id: '5',
      category: 'engagements',
      title: 'Anna & Mike',
      coverUrl: 'assets/portrait.jpg',
      location: 'Porto, Portugal',
      description: 'A beautiful outdoor ceremony surrounded by vineyards',
      hero: 'assets/hor-4.jpg',
      images: [
        'assets/clients-1.jpg',
        'assets/clients-2.jpg',
        'assets/clients-3.jpg',
        'assets/clients-4.jpg',
        'assets/detwedd.jpg',
        'assets/clients-1.jpg',
        'assets/couple.jpg',
        'assets/portrait.jpg',
        'assets/clients-1.jpg',
        'assets/clients-4.jpg',
        'assets/details.jpg',
        'assets/clients-3.jpg',
        'assets/detwedd.jpg',
        'assets/clients-2.jpg',
        'assets/couple.jpg',
        'assets/detwedd.jpg',
        'assets/clients-2.jpg',
        'assets/welcome.jpg',
        'assets/clients-4.jpg',
        'assets/detwedd.jpg',
      ]
    },
    {
      id: '6',
      category: 'photoshoots',
      title: 'Summer Shoot',
      coverUrl: 'assets/details.jpg',
      location: 'Guadalajara, Jal.',
      description: 'A beautiful outdoor ceremony surrounded by vineyards',
      hero: 'assets/hor-5.jpg',
      images: [
        'assets/clients-1.jpg',
        'assets/clients-2.jpg',
        'assets/clients-3.jpg',
        'assets/clients-4.jpg',
        'assets/detwedd.jpg',
        'assets/clients-1.jpg',
        'assets/couple.jpg',
        'assets/portrait.jpg',
        'assets/clients-1.jpg',
        'assets/clients-4.jpg',
        'assets/details.jpg',
        'assets/clients-3.jpg',
        'assets/detwedd.jpg',
        'assets/clients-2.jpg',
        'assets/couple.jpg',
        'assets/detwedd.jpg',
        'assets/clients-2.jpg',
        'assets/welcome.jpg',
        'assets/clients-4.jpg',
        'assets/detwedd.jpg',
      ]
    },
    {
      id: '7',
      category: 'weddings',
      title: 'Celeste & Charles',
      coverUrl: 'assets/couple.jpg',
      location: 'Guadalajara, Jal.',
      description: 'A beautiful outdoor ceremony surrounded by vineyards',
      hero: 'assets/detwedd.jpg',
      images: [
        'assets/clients-1.jpg',
        'assets/clients-2.jpg',
        'assets/clients-3.jpg',
        'assets/clients-4.jpg',
        'assets/detwedd.jpg',
        'assets/clients-1.jpg',
        'assets/couple.jpg',
        'assets/portrait.jpg',
        'assets/clients-1.jpg',
        'assets/clients-4.jpg',
        'assets/details.jpg',
        'assets/clients-3.jpg',
        'assets/detwedd.jpg',
        'assets/clients-2.jpg',
        'assets/couple.jpg',
        'assets/detwedd.jpg',
        'assets/clients-2.jpg',
        'assets/welcome.jpg',
        'assets/clients-4.jpg',
        'assets/detwedd.jpg',
      ]
    },
    {
      id: '8',
      category: 'engagements',
      title: 'Anna & Mike',
      coverUrl: 'assets/detwedd.jpg',
      location: 'Guadalajara, Jal.',
      description: 'A beautiful outdoor ceremony surrounded by vineyards',
      hero: 'assets/hor-1.jpg',
      images: [
        'assets/clients-1.jpg',
        'assets/clients-2.jpg',
        'assets/clients-3.jpg',
        'assets/clients-4.jpg',
        'assets/detwedd.jpg',
        'assets/clients-1.jpg',
        'assets/couple.jpg',
        'assets/portrait.jpg',
        'assets/clients-1.jpg',
        'assets/clients-4.jpg',
        'assets/details.jpg',
        'assets/clients-3.jpg',
        'assets/detwedd.jpg',
        'assets/clients-2.jpg',
        'assets/couple.jpg',
        'assets/detwedd.jpg',
        'assets/clients-2.jpg',
        'assets/welcome.jpg',
        'assets/clients-4.jpg',
        'assets/detwedd.jpg',
      ]
    },
    {
      id: '9',
      category: 'photoshoots',
      title: 'Summer Shoot',
      coverUrl: 'assets/welcome.jpg',
      location: 'Guadalajara, Jal.',
      description: 'A beautiful outdoor ceremony surrounded by vineyards',
      hero: 'assets/hor-4.jpg',
      images: [
        'assets/clients-1.jpg',
        'assets/clients-2.jpg',
        'assets/clients-3.jpg',
        'assets/clients-4.jpg',
        'assets/detwedd.jpg',
        'assets/clients-1.jpg',
        'assets/couple.jpg',
        'assets/portrait.jpg',
        'assets/clients-1.jpg',
        'assets/clients-4.jpg',
        'assets/details.jpg',
        'assets/clients-3.jpg',
        'assets/detwedd.jpg',
        'assets/clients-2.jpg',
        'assets/couple.jpg',
        'assets/detwedd.jpg',
        'assets/clients-2.jpg',
        'assets/welcome.jpg',
        'assets/clients-4.jpg',
        'assets/detwedd.jpg',
      ]
    },
  ]

  getAll(): PortfolioItem[] {
    return this.portfolio.map(({ id, category, title, coverUrl, location }) => ({
      id, category, title, coverUrl, location
    }));
  }

  getByCategory(category: PortfolioItem['category']): PortfolioItem[] {
    return this.getAll().filter(item => item.category === category);
  }

  getById(id: string): PortfolioDetails | null {
    return this.portfolio.find(item => item.id === id) || null;
  }
}
