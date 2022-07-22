import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-view-country',
  templateUrl: './view-country.component.html',
  styles: [],
})
export class ViewCountryComponent implements OnInit {
  country!: Country;

  constructor(
    private activateRoute: ActivatedRoute,
    private countryService: CountryService
  ) {}

  ngOnInit(): void {
    // this.activateRoute.params.subscribe(({ code }) => {
    //   console.log(code);
    //   this.countryService.getCountryByCode(code).subscribe((data) => {
    //     console.log(data);
    //   });
    // });

    this.activateRoute.params
      .pipe(
        switchMap((params) => {
          return this.countryService.getCountryByCode(params['code']);
        }),
        // tap(resp => console.log(resp))
        tap(console.log)
      )
      .subscribe((resp) => {
        // console.log(resp);
        this.country = resp[0];
      });
  }
}
