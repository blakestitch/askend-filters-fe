import {ChangeDetectionStrategy, Component, inject, OnInit} from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import {FilterComponent} from './components/filter/filter.component';
import {MatDialog} from '@angular/material/dialog';
import {MatButton} from '@angular/material/button';
import {DialogComponent} from './components/dialog/dialog.component';
import {MatSlideToggle} from '@angular/material/slide-toggle';
import {NgIf} from '@angular/common';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {CriteriaMetadataResource} from './services/criteria.metadata.resource.module';
import {CriteriaMetadataService} from './services/criteria.metadata.service';
import {MatGridList, MatGridTile} from '@angular/material/grid-list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [MatInputModule, MatButton, MatSlideToggle, NgIf, FilterComponent, FormsModule, DashboardComponent, MatGridTile, MatGridList],
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './app.component.css'

})
export class AppComponent implements OnInit {

  private readonly dialog = inject(MatDialog);
  private readonly filterMetadataService = inject(CriteriaMetadataService);

  protected modalToggle: boolean = true;
  protected showNewFilter: boolean = false;
  protected showAllFilters: boolean = false;

  protected filterMetadataResources: CriteriaMetadataResource[] = [];

  ngOnInit(): void {
    this.filterMetadataService.getAllCriteriasMetadata().subscribe(resources => {
      this.filterMetadataResources = resources;
    })
  }

  openDialog(): void {
    this.dialog.open(DialogComponent, {
      height: '300px',
      minWidth: '400px',
      maxWidth: '800px',
      panelClass: 'custom-dialog',
      data: this.filterMetadataResources
    });
  }
}
