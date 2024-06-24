import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-material-list',
  templateUrl: './material-list.component.html',
  styleUrls: ['./material-list.component.css']
})
export class MaterialListComponent {
  @Input() searchTerm: string = '';
  @Input() filters: { technologies: string[], industries: string[] } = { technologies: [], industries: [] };

  materials = [
    { name: 'PLA', tags: ['3D printing', 'FDM', 'Medical', 'Standard Thermoplastics'], description: 'Description related to the item', image: 'assets/img1.jpg', availableColors: ['black', 'red', 'white', 'yellow'], moreInfo: { pros: 'Pros of the items', cons: 'Cons of the items', others: 'Other additional information' }, fullUrl: 'https://example.com/pla' },
    { name: 'PETG', tags: ['3D printing', 'SLA', 'Electronics', 'Resin'], description: 'Description related to the item', image: 'assets/img1.jpg', availableColors: ['black', 'grey', 'white'], moreInfo: { pros: 'Pros of the items', cons: 'Cons of the items', others: 'Other additional information' }, fullUrl: 'https://example.com/petg' },
    { name: 'ABS', tags: ['3D printing', 'FDM', 'Medical', 'Engineering'], description: 'Description related to the item', image: 'assets/img1.jpg', availableColors: ['blue', 'green', 'white', 'black'], moreInfo: { pros: 'Pros of the items', cons: 'Cons of the items', others: 'Other additional information' }, fullUrl: 'https://example.com/abs' },
    { name: 'Polycarbonate', tags: ['FDM', 'Medical', 'Engineering'], description: 'Description related to the item', image: 'assets/img1.jpg', availableColors: ['clear', 'red', 'blue', 'black'], moreInfo: { pros: 'Pros of the items', cons: 'Cons of the items', others: 'Other additional information' }, fullUrl: 'https://example.com/polycarbonate' },
    { name: 'Nylon', tags: ['3D printing', 'SLS', 'Industrial', 'Engineering'], description: 'Description related to the item', image: 'assets/img1.jpg', availableColors: ['white', 'black'], moreInfo: { pros: 'Pros of the items', cons: 'Cons of the items', others: 'Other additional information' }, fullUrl: 'https://example.com/nylon' },
    { name: 'PLA', tags: ['3D printing', 'FDM', 'Medical', 'Standard Thermoplastics'], description: 'Description related to the item', image: 'assets/img1.jpg', availableColors: ['black', 'red', 'white', 'yellow'], moreInfo: { pros: 'Pros of the items', cons: 'Cons of the items', others: 'Other additional information' }, fullUrl: 'https://example.com/pla' },
    { name: 'PETG', tags: ['3D printing', 'SLA', 'Electronics', 'Resin'], description: 'Description related to the item', image: 'assets/img1.jpg', availableColors: ['black', 'grey', 'white'], moreInfo: { pros: 'Pros of the items', cons: 'Cons of the items', others: 'Other additional information' }, fullUrl: 'https://example.com/petg' },
    { name: 'ABS', tags: ['3D printing', 'FDM', 'Medical', 'Engineering'], description: 'Description related to the item', image: 'assets/img1.jpg', availableColors: ['blue', 'green', 'white', 'black'], moreInfo: { pros: 'Pros of the items', cons: 'Cons of the items', others: 'Other additional information' }, fullUrl: 'https://example.com/abs' },
    { name: 'Polycarbonate', tags: ['FDM', 'Medical', 'Engineering'], description: 'Description related to the item', image: 'assets/img1.jpg', availableColors: ['clear', 'red', 'blue', 'black'], moreInfo: { pros: 'Pros of the items', cons: 'Cons of the items', others: 'Other additional information' }, fullUrl: 'https://example.com/polycarbonate' },
    { name: 'Nylon', tags: ['3D printing', 'SLS', 'Industrial', 'Engineering'], description: 'Description related to the item', image: 'assets/img1.jpg', availableColors: ['white', 'black'], moreInfo: { pros: 'Pros of the items', cons: 'Cons of the items', others: 'Other additional information' }, fullUrl: 'https://example.com/nylon' }
  ];

  get filteredMaterials() {
    return this.materials.filter(material => {
      const matchesSearchTerm = material.name.toLowerCase().includes(this.searchTerm.toLowerCase());
      const matchesTechnologies = this.filters.technologies.length === 0 || this.filters.technologies.some(tech => material.tags.includes(tech));
      const matchesIndustries = this.filters.industries.length === 0 || this.filters.industries.some(ind => material.tags.includes(ind));
      return matchesSearchTerm && matchesTechnologies && matchesIndustries;
    });
  }
}
