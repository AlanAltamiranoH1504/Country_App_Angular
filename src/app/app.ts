import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterPage } from "./shared/pages/footer-page/footer-page";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FooterPage],
  templateUrl: './app.html'
})
export class App {
  protected readonly title = signal('country-app');
}
