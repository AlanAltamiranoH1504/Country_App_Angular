import { Component, inject, signal } from '@angular/core';
import { CountrySearchForm } from "../../components/country-search-form/country-search-form";
import { CountryList } from "../../components/country-list/country-list";
import { CountryService } from '../../service/country-service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-country-page',
  imports: [CountrySearchForm, CountryList],
  templateUrl: './by-country-page.html',
  styleUrl: './by-country-page.css',
})
export class ByCountryPage {
  protected countryService = inject(CountryService);
  public countries = signal<Country[]>([]);
  public isError = signal<string | null>(null);

  protected receive_countr_to_search(country: string) {
    this.countryService.searchByCountry(country).subscribe({
      next: (countries) => {
        this.countries.set(countries);
      },
      error: (err) => {
        this.countries.set([]);
        this.isError.set("No se encontraron paises por el nombre: " + country);
      },
    });
  }
}
