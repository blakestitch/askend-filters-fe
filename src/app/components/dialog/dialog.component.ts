import {Component, inject, model} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {FilterComponent} from '../filter/filter.component';
import {FilterModel} from '../../models/filter.model';

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [
    FilterComponent
  ],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.css'
})
export class DialogComponent {
  readonly dialogRef = inject(MatDialogRef<DialogComponent>);
  readonly data = inject<FilterModel>(MAT_DIALOG_DATA);

}
