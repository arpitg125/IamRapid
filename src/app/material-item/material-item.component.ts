import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-material-item',
  templateUrl: './material-item.component.html',
  styleUrls: ['./material-item.component.css']
})
export class MaterialItemComponent {
  @Input() material: any;
}
