import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [],
  template: `<div class="container">
    <nav class="nav"></nav>
    <div class="content">admin page</div>
  </div>`,
  styleUrl: './admin.component.scss',
})
export class AdminComponent {}
