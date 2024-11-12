import {Component, Input} from '@angular/core';
import {FilterModel} from '../../models/filter.model';

@Component({
  selector: 'app-filter-view',
  standalone: true,
  imports: [],
  templateUrl: './filter-view.component.html',
  styleUrl: './filter-view.component.css'
})
export class FilterViewComponent {

  @Input()
  filter: FilterModel;

  constructor() {
    // dummy data
    this.filter = {
      name: 'ola',
      criterias : [{type: 'AMOUNT', comparingCondition: 'comparing1', value: 'val1'},
        {type: 'AMOUNT', comparingCondition: 'comparing2', value: 'val2'}
      ]
    }
  }

}
