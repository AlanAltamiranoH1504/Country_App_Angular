import { Component, signal } from '@angular/core';
import { CountrySearchForm } from '../../components/country-search-form/country-search-form';
import { CountryList } from "../../components/country-list/country-list";

@Component({
  selector: 'app-by-capital-page',
  imports: [CountrySearchForm, CountryList],
  templateUrl: './by-capital-page.html',
  styleUrl: './by-capital-page.css',
})
export class ByCapitalPage {

  public receive_capital_to_search(capital_to_search: string) {
    console.log(`Capital a buscar desde padre ${capital_to_search}`);
  }
}
