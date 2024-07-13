import { Component } from '@angular/core';
import { DoorComponent } from '../../entities';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [DoorComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
