import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CountryNavbar } from "../../components/country-navbar/country-navbar";

@Component({
  selector: 'app-country-layout',
  imports: [RouterOutlet, CountryNavbar],
  templateUrl: './country-layout.html',
})
export class CountryLayout {

}
