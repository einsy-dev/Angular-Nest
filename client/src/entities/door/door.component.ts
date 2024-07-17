import { Component, Input } from '@angular/core';
import { FavoriteSvgComponent } from '../../shared/icons/favorite.component';
import { CompareSvgComponent } from '../../shared/icons/compare.component';

@Component({
  selector: 'app-door',
  standalone: true,
  imports: [FavoriteSvgComponent, CompareSvgComponent],
  templateUrl: './door.component.html',
  styleUrl: './door.component.scss',
})
export class DoorComponent {
  @Input({ required: true }) img = '';
  @Input({ required: true }) title = '';
  @Input({ required: true }) text = '';
}
