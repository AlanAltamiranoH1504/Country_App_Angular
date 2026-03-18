import { Country } from "../interfaces/country.interface";
import { RESTCountry } from "../interfaces/rest-countries.interface";

export class CountryMapper {
    static mapRestCountryToCountry(restCounty: RESTCountry): Country {
        return {
            capital: restCounty.capital?.join(","),
            cca2: restCounty.cca2,
            flag: restCounty.flag,
            flagSvg: restCounty.flags.svg,
            name: restCounty.translations["spa"].official ?? "No nombre en español",
            population: restCounty.population
        }
    }

    static mapRestCountryArrayToCountryArray(restCountries: RESTCountry[]): Country[] {
        return restCountries.map((country) => this.mapRestCountryToCountry(country));
    }
}