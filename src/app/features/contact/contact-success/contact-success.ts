import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Buttons } from '../../../shared/buttons/buttons';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contact-success',
  imports: [RouterModule, Buttons, FontAwesomeModule],
  templateUrl: './contact-success.html',
  styleUrl: './contact-success.scss'
})
export class ContactSuccess {
  faCheck = faCircleCheck;
}
