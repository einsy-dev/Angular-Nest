import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink],
  template: `<div class="filter">
    <ul>
      <li><a routerLink="test">Test</a></li>
      <li>Casing</li>
      <li>Jamb</li>
      <li>Threshold</li>
      <li>Trim</li>
      <li>Panel</li>
      <li>Frame</li>
      <li>Fascia</li>
      <li>Roof</li>
      <li>Roof Panel</li>
    </ul>
  </div>`,
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {}
