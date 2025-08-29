import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ImageService, PortfolioDetails } from '../../../core/services/image-service';
import { Buttons } from '../../../shared/buttons/buttons';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowRight, faArrowLeft, faArrowUp } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-portfolio-gallery',
  standalone: true,
  imports: [CommonModule, Buttons, RouterModule, FontAwesomeModule],
  templateUrl: './portfolio-gallery.html',
  styleUrls: ['./portfolio-gallery.scss']
})
export class PortfolioGallery implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router)
  private imageService = inject(ImageService);

  faArrowRight = faArrowRight;
  faArrowLeft = faArrowLeft;
  faArrowUp = faArrowUp;

  isLoading: boolean = true;

  itemId: string | null = null;
  item: PortfolioDetails | null = null;
  images: string[] = [];

  allIds: string[] = [];
  prevId: string | null = null;
  nextId: string | null = null;

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.itemId = params.get('id');
      if (this.itemId) {
        this.isLoading = true;
        this.item = this.imageService.getById(this.itemId);
        this.images = this.item?.images || [];
        this.isLoading = false;

        this.allIds = this.imageService.getAll().map(i => i.id);
        this.setPrevNext();
      }
    });
  }

  private setPrevNext() {
    if (!this.itemId) {
      return;
    }

    const currentIndex = this.allIds.indexOf(this.itemId);

    if (currentIndex === -1) return;

    this.prevId = this.allIds[(currentIndex - 1 + this.allIds.length) % this.allIds.length];
    this.nextId = this.allIds[(currentIndex + 1) % this.allIds.length];
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  goTo(id: string | null) {
    if (id) this.router.navigate(['/portfolio/gallery', id]);
  }
}
