import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CriteriaMetadataResource} from '../../services/criteria.metadata.resource.module';
import {MatDatepicker, MatDatepickerInput, MatDatepickerToggle} from '@angular/material/datepicker';
import {MatFormField, MatLabel, MatSuffix} from '@angular/material/form-field';
import {MatInput} from '@angular/material/input';
import {MatOption} from '@angular/material/core';
import {MatSelect} from '@angular/material/select';
import {MatButton, MatIconButton} from '@angular/material/button';
import {AsyncPipe, JsonPipe} from '@angular/common';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {CriteriaForm} from '../filter/filter.component';
import {MatIcon} from '@angular/material/icon';
import {CriteriaType} from './criteria.type.enum';

@Component({
  selector: 'app-criteriarow',
  standalone: true,
  imports: [
    MatDatepicker,
    MatDatepickerInput,
    MatDatepickerToggle,
    MatFormField,
    MatInput,
    MatLabel,
    MatOption,
    MatSelect,
    MatSuffix,
    MatButton,
    AsyncPipe,
    JsonPipe,
    ReactiveFormsModule,
    MatIcon,
    MatIconButton
  ],
  templateUrl: './criteriarow.component.html'
})
export class CriteriarowComponent implements OnInit {

  protected readonly CriteriaType = CriteriaType;

  @Input()
  idx!: number;

  @Input()
  criteriasMetadata!: CriteriaMetadataResource[]

  @Input()
  criteriaForm!: FormGroup<CriteriaForm>;

  @Output()
  removeRow = new EventEmitter<number>();

  protected currentComparingConditions: string[] = []

  protected get type(): FormControl<string | null> {
    return this.criteriaForm.controls.type;
  }

  protected get comparingCondition(): FormControl<string | null> {
    return this.criteriaForm.controls.comparingCondition;
  }

  protected get value(): FormControl<string | null> {
    return this.criteriaForm.controls.value;
  }

  ngOnInit(): void {
    this.makeAmountAsDefaultType();
  }

  private makeAmountAsDefaultType() {
    this.adaptToTypeChange(CriteriaType.AMOUNT);
  }

  protected adaptToTypeChange(newType: string) {
    this.changeConditionsBasedOnType(newType)
    this.type.setValue(newType)
    this.comparingCondition.reset();
    this.value.reset();
  }

  private changeConditionsBasedOnType(newType: string) {
    this.currentComparingConditions = this.criteriasMetadata.filter(value => value.criteriaType == newType)[0].comparingConditions
  }
}
