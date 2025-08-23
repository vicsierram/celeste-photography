import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ImageService, PortfolioDetails } from '../../../core/services/image-service';

@Component({
  selector: 'app-portfolio-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio-gallery.html',
  styleUrls: ['./portfolio-gallery.scss']
})
export class PortfolioGallery implements OnInit {
  private route = inject(ActivatedRoute);
  private imageService = inject(ImageService);

  itemId: string | null = null;
  item: PortfolioDetails | null = null;
  images: string[] = [];

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.itemId = params.get('id');
      if (this.itemId) {
        this.item = this.imageService.getById(this.itemId);
        this.images = this.item?.images || [];
        console.log(this.item);
      }
    });
  }
}
