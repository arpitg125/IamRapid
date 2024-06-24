import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FilterPopupComponent } from './filter-popup/filter-popup.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  searchTerm: string = '';
  filters: { technologies: string[], industries: string[] } = { technologies: [], industries: [] };

  constructor(public dialog: MatDialog) {}

  onSearch(searchTerm: string) {
    this.searchTerm = searchTerm;
  }

  openFilterPopup() {
    const dialogRef = this.dialog.open(FilterPopupComponent, {
      width: '300px',
      position: { right: '0' },
      hasBackdrop: true
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.filters = result;
      }
    });
  }

  onFilter(filters: { technologies: string[], industries: string[] }) {
    this.filters = filters;
  }
}
