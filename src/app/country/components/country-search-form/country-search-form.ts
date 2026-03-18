import { Component, output, signal } from '@angular/core';

@Component({
  selector: 'app-country-search-form',
  imports: [],
  templateUrl: './country-search-form.html',
  styleUrl: './country-search-form.css',
})
export class CountrySearchForm {
  protected inputSearch = signal<string>('');
  protected capital_to_search = output<string>();
  protected place_holder_value = output<string>();

  protected save_input_value(value: string) {
    this.inputSearch.set(value);
    setTimeout(() => {
      this.capital_to_search.emit(this.inputSearch());
    }, 500);
  }

  protected search_capital() {
    if (this.inputSearch() === '') {
      alert('No se han ingresado valores');
    }
    this.capital_to_search.emit(this.inputSearch());
  }
}
