import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {
  rangeDateValidator, isRequiredValidator
} from '../customValidators/validatorsFn';

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.css'],
})
export class SearchMovieComponent implements OnInit {
  constructor(private fb: FormBuilder) {}

  minReleaseYear = 1900;
  maxReleaseYear = new Date().getFullYear();

  movieForm: any = this.fb.group({
    identifier: this.fb.group(
      {
        id: [''],
        title: [''],
      }, {
        validators: [ isRequiredValidator('id', 'title') ]
      }
    ),
    type: this.fb.group({
      movie: [false],
      serie: [true],
      episode: [false]
    }),
    releaseYear: ['', rangeDateValidator(this.minReleaseYear, this.maxReleaseYear)], 
    file: this.fb.group({
      completed: [],
      short: [false]
    }),
  });

  ngOnInit() {
    this.movieForm.valueChanges.subscribe((value: any) => {
      console.log('movieForm value changes: ', value);
    });

    this.movieForm.controls.file.patchValue({
      short: true
    });
  }

  onSubmit() {
    console.log(this.movieForm.value);
  }
}
