import {Component, Input} from '@angular/core';
import {MatList, MatListItem} from '@angular/material/list';
import {FilterViewComponent} from '../filter-view/filter-view.component';
import {FilterModel} from '../../models/filter.model';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    MatListItem,
    MatList,
    FilterViewComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  @Input({required: true})
  filters: FilterModel[] = [];

}
