import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CriteriaMetadataResource} from './criteria.metadata.resource.module';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CriteriaMetadataService {

  private readonly http: HttpClient = inject(HttpClient);

  getAllCriteriasMetadata(): Observable<CriteriaMetadataResource[]> {
    return this.http.get<CriteriaMetadataResource[]>('api/criterias-metadata');
  }

}


