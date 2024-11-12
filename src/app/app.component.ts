import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatOption} from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import {MatGridList, MatGridTile} from '@angular/material/grid-list';
import {MatSelect} from '@angular/material/select';
import {FormBuilder, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FilterComponent} from './components/filter/filter.component';
import {MatDialog} from '@angular/material/dialog';
import {MatButton} from '@angular/material/button';
import {DialogComponent} from './components/dialog/dialog.component';
import {MatSlideToggle} from '@angular/material/slide-toggle';
import {NgIf} from '@angular/common';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {FilterService} from './services/filter.service';
import {FilterModel} from './models/filter.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatDatepickerModule, MatGridList, MatGridTile, MatSelect, MatOption, ReactiveFormsModule, MatButton, MatSlideToggle, NgIf, FilterComponent, FormsModule, DashboardComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './app.component.css'

})
export class AppComponent {

  readonly dialog = inject(MatDialog);
  modalToggle: boolean = true;
  showNewFilter: boolean = false;
  showAllFilters: boolean = false;

  filters: FilterModel[] | undefined;

  constructor(
    private formBuilder: FormBuilder,
    private filterService: FilterService
  ) {

  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      height: '300px',
      maxWidth: '800px',
      panelClass: 'custom-dialog',
      data: {
        text1: "hello",
        text2: "world"
      },
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('closed');
    });
  }
}
