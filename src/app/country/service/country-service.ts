import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { RESTCountry } from '../interfaces/rest-countries.interface';
import { map, Observable } from 'rxjs';
import { Country } from '../interfaces/country.interface';
import { CountryMapper } from '../mappers/country.mapper';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private http = inject(HttpClient);

  public searchByCapital(capital: string): Observable<Country[]> {
    return this.http
      .get<RESTCountry[]>(`${environment.URL_BY_CAPIRAL}/${capital}`)
      .pipe(
        map((restConuntries) => CountryMapper.mapRestCountryArrayToCountryArray(restConuntries)),
      );
  }

  public searchByCountry(country: string): Observable<Country[]> {
    return this.http
      .get<RESTCountry[]>(`${environment.URL_BY_NAME}/${country}`)
      .pipe(map((restCountries) => CountryMapper.mapRestCountryArrayToCountryArray(restCountries)));
  }
}
