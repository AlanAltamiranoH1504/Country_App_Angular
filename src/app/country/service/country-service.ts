import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { RESTCountry } from '../interfaces/rest-countries.interface';
import { delay, map, Observable, of, tap } from 'rxjs';
import { Country } from '../interfaces/country.interface';
import { CountryMapper } from '../mappers/country.mapper';
import { Region } from '../interfaces/region.type';

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
    return this.http.get<RESTCountry[]>(`${environment.URL_BY_NAME}/${country}`).pipe(
      delay(300),
      map((restCountries) => CountryMapper.mapRestCountryArrayToCountryArray(restCountries)),
    );
  }

  public searchCountryDetails(alphacode: string) {
    return this.http.get<RESTCountry[]>(`${environment.URL_BY_ALPHACODE}/${alphacode}`).pipe(
      map((restCountries) => CountryMapper.mapRestCountryArrayToCountryArray(restCountries)),
      map((countries) => {
        return countries[0];
      }),
    );
  }

  public searchCountriesByRegion(region: Region) {
    return this.http.get<RESTCountry[]>(`${environment.URL_BY_REGION}/${region}`).pipe(
      map((restCountries) => CountryMapper.mapRestCountryArrayToCountryArray(restCountries))
    );
  }
}
