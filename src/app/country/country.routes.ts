import { Routes } from '@angular/router';
import { ByCapitalPage } from './pages/by-capital-page/by-capital-page';
import { CountryLayout } from './layouts/country-layout/country-layout';
import { ByCountryPage } from './pages/by-country-page/by-country-page';
import { ByRegionPage } from './pages/by-region-page/by-region-page';
import { CountryDetails } from './components/country-details/country-details';

export const countryRoutes: Routes = [
    {
        path: "", 
        component: CountryLayout,
        children: [
            {path: "by_capital", component: ByCapitalPage},
            {path: "by_country", component: ByCountryPage}, 
            {path: "by_region", component: ByRegionPage},
            {path: "country_details/:name", component: CountryDetails},
            {path: "**", redirectTo: "by_capital"}
        ]
    },
];

export default countryRoutes;