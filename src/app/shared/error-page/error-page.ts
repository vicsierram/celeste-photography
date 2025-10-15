import { Component, inject } from '@angular/core';
import { RouterModule, ActivatedRoute } from '@angular/router';

import { ErrorType } from '../models/error-type.enum.ts';
import { Buttons } from '../buttons/buttons';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFaceFrown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-error-page',
  imports: [Buttons, RouterModule, FontAwesomeModule],
  templateUrl: './error-page.html',
  styleUrl: './error-page.scss'
})

export class ErrorPage {
  private route = inject(ActivatedRoute);
  errorType = ErrorType.Generic;
  faSad = faFaceFrown;

  constructor() {
    this.route.queryParams.subscribe(params => {
      const type = params['type'] as ErrorType;
      this.errorType = Object.values(ErrorType).includes(type) ? type : ErrorType.Generic;
    });
  }

  get title(): string {
    switch (this.errorType) {
      case ErrorType.Contact:
        return 'Message Not Sent';
      case ErrorType.NotFound:
        return 'Page Not Found';
      default:
        return 'Something Went Wrong';
    }
  }

  get message(): string {
    switch (this.errorType) {
      case ErrorType.Contact:
        return 'There was a problem sending your message. Please try again or contact me directly.';
      case ErrorType.NotFound:
        return 'The page you’re looking for doesn’t exist.';
      default:
        return 'An unexpected error occurred.';
    }
  }
}
