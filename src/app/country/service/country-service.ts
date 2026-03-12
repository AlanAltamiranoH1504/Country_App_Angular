import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { RESTCountry } from '../interfaces/rest-countries.interface';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private http = inject(HttpClient);

  public searchByCapital(capital: string) {
    return this.http.get<RESTCountry[]>(`${environment.URL_BY_CAPIRAL}/${capital}`);
  }
}
