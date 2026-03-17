import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountryService } from '../../service/country-service';
import { Country } from '../../interfaces/country.interface';
import { CountryInformation } from "./country-information/country-information";

@Component({
  selector: 'app-country-details',
  imports: [CountryInformation],
  templateUrl: './country-details.html',
  styleUrl: './country-details.css',
})
export class CountryDetails {
  protected countryService = inject(CountryService);
  protected countryCodePathVariable = inject(ActivatedRoute).snapshot.params['code'];
  protected countryDetails = signal<Country | null>(null);
  public isError = signal<string | null>(null);

  protected countryDetailsAPI = this.countryService
    .searchCountryDetails(this.countryCodePathVariable)
    .subscribe({
      next: (details) => {
        this.countryDetails.set(details);
      },
      error: (error) => {
        this.countryDetails.set(null);
        console.log(error);
        
        this.isError.set("Ocurrio un error en la busqueda de los detalles del pais");
      },
    });
}
