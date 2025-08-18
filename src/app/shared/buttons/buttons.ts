import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';
import { ButtonColor, ButtonSize, ButtonVariant } from './button.model';

@Component({
  selector: 'app-buttons',
  imports: [NgClass],
  templateUrl: './buttons.html',
  styleUrl: './buttons.scss'
})

export class Buttons {
  @Input() type: 'button' | 'submit' = 'button';
  @Input() variant: ButtonVariant = 'solid';
  @Input() color: ButtonColor = 'primary';
  @Input() size: ButtonSize = 'md';

  baseClasses = 'font-semibold rounded-lg transition-all duration-300 hover:scale-105 focus:outline-none';

  colorClasses: Record<ButtonColor, string> = {
    primary: 'bg-blue text-white hover:bg-blue-mid',
    secondary: 'bg-blue-mid text-white hover:bg-blue',
    accent: 'bg-pink-mid text-white hover:bg-pink'
  };

  variantClasses: Record<ButtonVariant, string> = {
    solid: '',
    outline: 'border-2 bg-transparent hover:bg-opacity-10',
    ghost: 'bg-transparent hover:bg-opacity-10'
  };

  sizeClasses: Record<ButtonSize, string> = {
    sm: 'px-3 py-1 text-base',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-base',
    full: 'px-6 py-3 text-base w-full'
  };
}
