import { Component, signal } from '@angular/core';
import { CountrySearchForm } from "../../components/country-search-form/country-search-form";
import { CountryList } from "../../components/country-list/country-list";

@Component({
  selector: 'app-by-country-page',
  imports: [CountrySearchForm, CountryList],
  templateUrl: './by-country-page.html',
  styleUrl: './by-country-page.css',
})
export class ByCountryPage {

  protected receive_countr_to_search(country: string) {
    console.log("Countr :" + country);
  }
}
