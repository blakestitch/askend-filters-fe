import {Component, inject} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {FilterComponent} from '../filter/filter.component';
import {CriteriaMetadataResource} from '../../services/criteria.metadata.resource.module';

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [
    FilterComponent
  ],
  templateUrl: './dialog.component.html'
})
export class DialogComponent {
  protected readonly criteriasMetadata: CriteriaMetadataResource[] = inject<CriteriaMetadataResource[]>(MAT_DIALOG_DATA);
}
