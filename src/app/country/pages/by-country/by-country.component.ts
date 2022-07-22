import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [],
})
export class ByCountryComponent implements OnInit {
  terms: string = '';
  hasError: boolean = false;
  listCountries: Country[] = [];
  countrySuggests: Country[] = [];
  showSuggestions: boolean = false;

  constructor(private countryService: CountryService) {}

  ngOnInit(): void {}

  search(term: string) {
    this.hasError = false;
    this.terms = term;
    this.showSuggestions = false;
    this.countryService.getCountryByName(term).subscribe({
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
    if (term === '') return;
    this.showSuggestions = true;
    this.hasError = false;
    this.terms = term;

    this.countryService.getCountryByName(term).subscribe({
      next: (resp) => (this.countrySuggests = resp.splice(0, 5)),
      error: (err) => (this.countrySuggests = []),
    });
  }
}
