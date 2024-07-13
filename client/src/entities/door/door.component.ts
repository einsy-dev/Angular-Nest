import { Component } from '@angular/core';
import { FavoriteSvgComponent } from '../../shared/icons/favorite.component';

@Component({
  selector: 'app-door',
  standalone: true,
  imports: [FavoriteSvgComponent],
  templateUrl: './door.component.html',
  styleUrl: './door.component.scss',
})
export class DoorComponent {
  img = '';
  title = 'Polka';
  text = 'Polka text';
}
