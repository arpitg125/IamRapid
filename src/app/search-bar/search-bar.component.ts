import { Component, EventEmitter, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  @Output() search = new EventEmitter<string>();
  searchTerm: string = '';
  searchSubject: Subject<string> = new Subject();

  constructor() {
    this.searchSubject.pipe(debounceTime(300)).subscribe((searchTerm) => {
      this.search.emit(searchTerm);
    });
  }

  onSearchChange(searchTerm: string) {
    this.searchSubject.next(searchTerm);
  }
}
