import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { AppComponent } from './app.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { FilterPopupComponent } from './filter-popup/filter-popup.component';
import { MaterialListComponent } from './material-list/material-list.component';
import { MaterialItemComponent } from './material-item/material-item.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    FilterPopupComponent,
    MaterialListComponent,
    MaterialItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // Import FormsModule here
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatDialogModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
