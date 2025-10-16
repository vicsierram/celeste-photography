import { Component } from '@angular/core';
import { Buttons } from '../../../shared/buttons/buttons';
import { RouterModule } from '@angular/router';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-details-approach',
  imports: [Buttons, FontAwesomeModule, RouterModule],
  templateUrl: './details-approach.html',
  styleUrl: './details-approach.scss'
})
export class DetailsApproach {
faArrow = faArrowRight;
}
