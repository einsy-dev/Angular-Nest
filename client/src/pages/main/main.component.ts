import { Component } from '@angular/core';
import { DoorComponent } from '../../entities';
import { FilterComponent } from '../../widgets/filter/filter.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [DoorComponent, FilterComponent],
  template: `<div class="main_page">
    <app-filter />
  </div>`,
  styleUrl: './main.component.scss',
})
export class MainComponent {}
