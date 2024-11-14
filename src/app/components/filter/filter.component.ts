import {Component, inject, Input} from '@angular/core';
import {MatFormField, MatLabel} from '@angular/material/form-field';
import {MatInput} from '@angular/material/input';
import {MatButton, MatIconButton} from '@angular/material/button';
import {JsonPipe, NgIf} from '@angular/common';
import {FilterService} from '../../services/filter.service';
import {CriteriaMetadataResource} from '../../services/criteria.metadata.resource.module';
import {CriteriarowComponent} from '../criteriarow/criteriarow.component';
import {FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatIcon} from '@angular/material/icon';

export interface FilterForm {
  name: FormControl<string | null>,
  criterias: FormArray<FormGroup<CriteriaForm>>
}

export interface CriteriaForm {
  type: FormControl<string | null>;
  comparingCondition: FormControl<string | null>;
  value: FormControl<string | null>;
}

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [
    NgIf,
    CriteriarowComponent,
    MatLabel,
    MatFormField,
    MatButton,
    MatInput,
    JsonPipe,
    ReactiveFormsModule,
    MatIcon,
    MatIconButton
  ],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {

  private readonly MAX_CRITERIAS = 20;
  private readonly MIN_CRITERIAS = 1;

  private readonly _snackBar = inject(MatSnackBar);
  private readonly filterService = inject(FilterService);

  @Input()
  criteriasMetadata!: CriteriaMetadataResource[];

  protected filterForm: FormGroup<FilterForm>;

  constructor() {
    this.filterForm = new FormGroup<FilterForm>({
      name: new FormControl<string>('', Validators.required),
      criterias: new FormArray<FormGroup<CriteriaForm>>([])
    })
    this.addRow();
  }

  protected get criterias(): FormArray<FormGroup<CriteriaForm>> {
    return this.filterForm.controls.criterias;
  }

  protected get name(): FormControl<string | null> {
    return this.filterForm.controls.name
  }

  protected submitFilter() {
    this.filterService.createFilter(this.filterForm).subscribe({
      next: () => this._snackBar.open("Created successfully", "Close"),
      error: () => this._snackBar.open("Error happened", "Close")
    })
  }

  protected addRow() {
    if (this.criterias.length < this.MAX_CRITERIAS) {
      this.criterias.push(new FormGroup<CriteriaForm>({
        type: new FormControl(''),
        comparingCondition: new FormControl(''),
        value: new FormControl('')
      }));
    }
  }

  protected removeRow(idx: number) {
    if (this.criterias.length > this.MIN_CRITERIAS) {
      this.criterias.removeAt(idx);
    }
  }
}
