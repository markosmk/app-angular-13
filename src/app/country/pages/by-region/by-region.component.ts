import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
  styles: [],
})
export class ByRegionComponent implements OnInit {
  terms: string = '';
  hasError: boolean = false;
  listCountries: Country[] = [];
  regions: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActive: string = '';

  constructor(private countryService: CountryService) {}
  ngOnInit(): void {}

  search(term: string) {
    this.hasError = false;
    this.terms = term;
    this.countryService.getCountryByRegion(term).subscribe({
      next: (data) => {
        this.listCountries = data;
      },
      error: (err) => {
        console.log(err);
        this.hasError = true;
        this.listCountries = [];
      },
    });
  }
  suggestions(term: string) {
    this.hasError = false;
  }
  activateRegion(region: string) {
    if (region === this.regionActive) return;
    this.regionActive = region;
    this.listCountries = [];
    //Todo: llamar al servicio
    this.countryService.getCountryByRegion(region).subscribe({
      next: (resp) => {
        console.log(resp);
        this.listCountries = resp;
      },
      error: (err) => console.log(err.message),
    });
  }
  getClass(region: string): string {
    return region === this.regionActive
      ? 'bg-cyan-900 text-cyan-100 hover:bg-cyan-900 pointer-events-none'
      : 'bg-cyan-100 text-cyan-700';
  }
}
