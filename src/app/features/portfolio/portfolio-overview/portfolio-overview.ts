// portfolio-overview.ts
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ImageService, PortfolioItem, PortfolioCategory, PORTFOLIO_CATEGORIES } from '../../../core/services/image-service';

@Component({
  selector: 'app-portfolio-overview',
  imports: [RouterModule],
  templateUrl: './portfolio-overview.html',
  styleUrl: './portfolio-overview.scss'
})
export class PortfolioOverview implements OnInit {
  private route = inject(ActivatedRoute);
  private imageService = inject(ImageService);

  images: PortfolioItem[] = [];
  category: PortfolioCategory | null = null;

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const raw = params.get('category'); // string | null
      this.category = (raw && this.isPortfolioCategory(raw)) ? raw : null;
      this.loadImages();
    });
  }

  private loadImages() {
    this.images = this.category
      ? this.imageService.getByCategory(this.category)
      : this.imageService.getAll();
  }

  private isPortfolioCategory(value: string): value is PortfolioCategory {
    return (PORTFOLIO_CATEGORIES as readonly string[]).includes(value);
  }
}
