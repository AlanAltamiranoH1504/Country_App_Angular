import { Component, input } from '@angular/core';
import { RESTCountry } from '../../interfaces/rest-countries.interface';

@Component({
  selector: 'app-country-list',
  imports: [],
  templateUrl: './country-list.html',
  styleUrl: './country-list.css',
})
export class CountryList {
  public countries = input.required<RESTCountry[]>();
}
