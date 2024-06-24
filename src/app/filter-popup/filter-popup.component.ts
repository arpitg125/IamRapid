import { Component, EventEmitter, Output } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-filter-popup',
  templateUrl: './filter-popup.component.html',
  styleUrls: ['./filter-popup.component.css']
})
export class FilterPopupComponent {
  @Output() filter = new EventEmitter<{ technologies: string[], industries: string[] }>();
  isOpen = true;

  technologies = [
    { name: '3D printing', selected: false },
    { name: 'FDM', selected: false },
    { name: 'Medical', selected: false },
    { name: 'Standard Thermoplastics', selected: false },

  ];

  industries = [
    { name: 'Automative', selected: false },
    { name: 'Aerospace', selected: false },
    { name: 'Consumer electronics', selected: false },
    { name: 'Robotics and Automation', selected: false },
    { name: 'Medical and Dental', selected: false },
    { name: 'Hobbyists', selected: false },
    { name: 'Architectural', selected: false },
    { name: 'Jewellery', selected: false },
  ];

  constructor(public dialogRef: MatDialogRef<FilterPopupComponent>) {}

  applyFilters() {
    const selectedTechnologies = this.technologies.filter(tech => tech.selected).map(tech => tech.name);
    const selectedIndustries = this.industries.filter(industry => industry.selected).map(industry => industry.name);
    this.filter.emit({ technologies: selectedTechnologies, industries: selectedIndustries });
    this.dialogRef.close();
  }

  resetFilters() {
    this.technologies.forEach(tech => tech.selected = false);
    this.industries.forEach(industry => industry.selected = false);
    this.filter.emit({ technologies: [], industries: [] });
  }

  close() {
    this.isOpen = false;
    setTimeout(() => this.dialogRef.close(), 300);  // Allow time for animation
  }
}
