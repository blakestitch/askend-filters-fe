import {Component, inject, OnInit} from '@angular/core';
import {MatList, MatListItem} from '@angular/material/list';
import {Observable} from 'rxjs';
import {FilterResource} from '../../services/filter.resource.module';
import {AsyncPipe} from '@angular/common';
import {FilterService} from '../../services/filter.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    MatListItem,
    MatList,
    AsyncPipe,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {

  private readonly filterService = inject(FilterService)

  protected filters$!: Observable<FilterResource[]>

  ngOnInit(): void {
    this.filters$ = this.filterService.getAllFilters();
  }
}
