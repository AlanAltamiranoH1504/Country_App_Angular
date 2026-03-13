import { Component, inject, signal } from '@angular/core';
import { CountrySearchForm } from '../../components/country-search-form/country-search-form';
import { CountryList } from '../../components/country-list/country-list';
import { CountryService } from '../../service/country-service';
import { RESTCountry } from '../../interfaces/rest-countries.interface';
import { CountryMapper } from '../../mappers/country.mapper';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-capital-page',
  imports: [CountrySearchForm, CountryList],
  templateUrl: './by-capital-page.html',
  styleUrl: './by-capital-page.css',
})
export class ByCapitalPage {
  public country_service = inject(CountryService);
  public isLoading = signal(true);
  public isError = signal<string | null>(null);
  public countries = signal<Country[]>([]);

  public receive_capital_to_search(capital_to_search: string) {
    this.country_service.searchByCapital(capital_to_search).subscribe((cout) => {
      this.countries.set(cout);
    });
  }
}
