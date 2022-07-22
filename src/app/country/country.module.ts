import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ByRegionComponent } from './pages/by-region/by-region.component';
import { ByCountryComponent } from './pages/by-country/by-country.component';
import { ByCapitalComponent } from './pages/by-capital/by-capital.component';
import { ViewCountryComponent } from './pages/view-country/view-country.component';
import { CountryTableComponent } from './components/country-table/country-table.component';
import { CountryInputComponent } from './components/country-input/country-input.component';

@NgModule({
  declarations: [
    ByRegionComponent,
    ByCountryComponent,
    ByCapitalComponent,
    ViewCountryComponent,
    CountryTableComponent,
    CountryInputComponent,
  ],
  exports: [
    ByRegionComponent,
    ByCountryComponent,
    ByCapitalComponent,
    ViewCountryComponent,
  ],
  imports: [CommonModule, FormsModule, RouterModule],
})
export class CountryModule {}
