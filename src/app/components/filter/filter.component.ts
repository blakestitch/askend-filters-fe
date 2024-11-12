import {Component} from '@angular/core';
import {MatGridList, MatGridTile} from '@angular/material/grid-list';
import {MatDatepicker, MatDatepickerInput, MatDatepickerToggle} from '@angular/material/datepicker';
import {MatFormField, MatLabel, MatSuffix} from '@angular/material/form-field';
import {MatInput} from '@angular/material/input';
import {MatOption} from '@angular/material/core';
import {MatSelect} from '@angular/material/select';
import {provideMomentDateAdapter} from '@angular/material-moment-adapter';


export const DATE_FORMAT = {
  parse: {
    dateInput: 'YYYY-MM-DD',
  },
  display: {
    dateInput: 'YYYY-MM-DD',
    monthYearLabel: 'YYYY',
    dateA11yLabel: 'YYYY-MM',
    monthYearA11yLabel: 'YY',
  },
};


@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [
    MatGridTile,
    MatGridList,
    MatDatepicker,
    MatDatepickerInput,
    MatDatepickerToggle,
    MatFormField,
    MatInput,
    MatLabel,
    MatOption,
    MatSelect,
    MatSuffix
  ],
  templateUrl: './filter.component.html',
  providers: [provideMomentDateAdapter(DATE_FORMAT)]
})
export class FilterComponent {


}
