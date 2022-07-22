import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-country-input',
  templateUrl: './country-input.component.html',
  styles: [],
})
export class CountryInputComponent implements OnInit {
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter(); // only call when user finished to write
  @Input() placeholder: string = '';

  debouncer: Subject<string> = new Subject();

  terms: string = '';

  constructor() {}

  ngOnInit(): void {
    this.debouncer.pipe(debounceTime(300)).subscribe((value) => {
      // console.log('debounce value', value);
      this.onDebounce.emit(value);
    });
  }

  keyPressed() {
    this.debouncer.next(this.terms);
  }

  search() {
    this.onEnter.emit(this.terms);
  }
}
