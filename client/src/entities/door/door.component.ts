import { Component } from '@angular/core';
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
  img = '';
  title = 'Polka';
  text =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at tincidunt nisi. Aliquam erat volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at tincidunt nisi. Aliquam erat volutpat.';
}
