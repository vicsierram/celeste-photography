import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';
import { ButtonColor, ButtonSize, ButtonVariant, ButtonState } from './button.model';

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
  @Input() state: ButtonState = 'default';

  baseClasses = 'inline-flex items-center justify-center font-sans tracking-wide rounded-full transition-colors duration-300 focus:outline-none';

  colorClasses: Record<ButtonColor, string> = {
    primary: 'bg-blue text-white hover:bg-blue/90',
    secondary: 'bg-sand text-blue hover:bg-blue hover:text-white',
    accent: 'bg-pink text-white hover:bg-pink-mid',
    neutral: 'bg-cloud text-moonlight hover:bg-gray-900 hover:text-white'
  };

  variantClasses: Record<ButtonVariant, string> = {
    solid: '',
    outline: 'border border-gray-400',
    ghost: ''
  };

  sizeClasses: Record<ButtonSize, string> = {
    sm: 'gap-2 items-center px-4 py-1.5 text-xs',
    md: 'gap-2 items-center px-6 py-2 text-base',
    lg: 'gap-2 items-center px-8 py-3 text-lg',
    full: 'gap-2 items-center px-8 py-3 text-base w-full'
  };

  stateClasses: Record<ButtonState, string> = {
    default: '',
    disabled: 'opacity-40 cursor-not-allowed',
    loading: 'animate-spin'
  }
}
