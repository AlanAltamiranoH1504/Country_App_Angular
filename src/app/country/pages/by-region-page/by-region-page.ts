import { Component, inject, signal } from '@angular/core';
import { CountryList } from '../../components/country-list/country-list';
import { Region } from '../../interfaces/region.type';
import { resource } from '@angular/core';
import { of } from 'rxjs';
import { CountryService } from '../../service/country-service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-region-page',
  imports: [CountryList],
  templateUrl: './by-region-page.html',
  styleUrl: './by-region-page.css',
})
export class ByRegionPage {
  public regions: Region[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania', 'Antarctic'];
  protected selectedRegion = signal<Region | null>(null);
  protected countries = signal<Country[]>([]);
  protected isError = signal<string | null>(null);
  protected countryService = inject(CountryService);

  protected selectRegion(region: Region) {
    this.selectedRegion.set(region);
    this.countryService.searchCountriesByRegion(this.selectedRegion()!).subscribe({
      next: (countries) => {
        this.countries.set(countries);
        this.isError.set(null);
      },
      error: (error) => {
        this.isError.set('Ocurrio un error en la busqueda');
        this.countries.set([]);
      },
    });
  }
}
