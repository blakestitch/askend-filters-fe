import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FilterResource} from './filter.resource.module';
import {Observable} from 'rxjs';
import {FormGroup} from '@angular/forms';
import {FilterForm} from '../components/filter/filter.component';


@Injectable({
  providedIn: 'root'
})
export class FilterService {

  private readonly FILTERS_URL = 'api/filters'
  private readonly http: HttpClient = inject(HttpClient);

  createFilter(filter: FormGroup<FilterForm>) {
    let filterResource: FilterResource = {
      name: filter.value.name ?? '',
      criterias: filter.value.criterias!.map(criteria => {
        return {
          type: criteria.type ?? '',
          comparingCondition: criteria.comparingCondition ?? '',
          value: criteria.value ?? ''
        }
      })
    }
    return this.http.post(this.FILTERS_URL, filterResource);
  }

  getAllFilters(): Observable<FilterResource[]> {
    return this.http.get<FilterResource[]>(this.FILTERS_URL)
  }
}


