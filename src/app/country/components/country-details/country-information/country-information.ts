import { Component, input, signal } from '@angular/core';
import { Country } from '../../../interfaces/country.interface';

@Component({
  selector: 'app-country-information',
  imports: [],
  templateUrl: './country-information.html',
  styleUrl: './country-information.css',
})
export class CountryInformation {
  public country = input.required<Country | null>();
}
