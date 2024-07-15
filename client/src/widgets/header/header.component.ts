import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  template: `<header>
    <nav class="nav">
      <ul class="nav_list">
        <li class="home">Home</li>
        <li class="doors">
          Doors
          <div class="dropdown">
            <ul>
              <li>Door 1</li>
              <li>Door 2</li>
              <li>Door 3</li>
            </ul>
          </div>
        </li>
        <li class="contact">Contact</li>
      </ul>
      <ul class="account_list">
        <li>Wishlist</li>
        <li>Cart</li>
        <li>Account</li>
      </ul>
    </nav>
  </header>`,
  styleUrl: './header.component.scss',
})
export class HeaderComponent {}
