import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-capital',
  templateUrl: './by-capital.component.html',
  styles: [],
})
export class ByCapitalComponent implements OnInit {
  terms: string = '';
  hasError: boolean = false;
  listCountries: Country[] = [];

  constructor(private countryService: CountryService) {}
  ngOnInit(): void {}

  search(term: string) {
    this.hasError = false;
    this.terms = term;
    this.countryService.getCountryByCapital(term).subscribe({
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
}
