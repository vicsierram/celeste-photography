import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms'
import { RouterModule, Router } from '@angular/router';

import { ErrorType } from '../../../shared/models/error-type.enum.ts';
import { environment } from '../../../../environments/environment.js';
import emailJs from '@emailjs/browser'

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contact-page',
  imports: [ReactiveFormsModule, RouterModule, FontAwesomeModule],
  templateUrl: './contact-page.html',
  styleUrl: './contact-page.scss'
})
export class ContactPage {
  private formBuilder = inject(FormBuilder);
  private router = inject(Router);

  faArrow = faArrowRight;
  isSubmitting = false;

  contactForm = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(4)]],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required, Validators.pattern(/^\+?[0-9]{10,15}$/)]],
    date: ['', Validators.required],
    location: ['', Validators.required],
    service: ['', Validators.required],
    message: ['', [Validators.required, Validators.minLength(10)]]
  })

  onSubmit() {
    if (this.contactForm.invalid) return;
    console.log(this.contactForm.value);
    this.isSubmitting = true;

    emailJs.send(
      environment.emailJs.serviceId,
      environment.emailJs.templateId,
      this.contactForm.value,
      environment.emailJs.publicKey
    )
      .then(() => {
        this.router.navigate(['/contact-success']);
      })
      .catch(() => {
        this.router.navigate(['**'], { queryParams: { type: ErrorType.Contact } });
      })
      .finally(() => this.isSubmitting = false);
  }
}
