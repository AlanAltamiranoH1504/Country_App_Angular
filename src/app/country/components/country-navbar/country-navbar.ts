import { Component } from '@angular/core';
import { RouterLinkActive, RouterLinkWithHref } from "@angular/router";

@Component({
  selector: 'app-country-navbar',
  imports: [RouterLinkActive, RouterLinkWithHref],
  templateUrl: './country-navbar.html',
  styleUrl: './country-navbar.css',
})
export class CountryNavbar {

}
