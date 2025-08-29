import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { Footer } from './shared/footer/footer';
import { Navbar } from "./shared/navbar/navbar";
import { ScrollTop } from './shared/scroll-top/scroll-top';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FontAwesomeModule, Footer, Navbar, ScrollTop],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('celeste-photography');
}
