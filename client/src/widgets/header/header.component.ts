import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  template: `<header>
    <nav class="nav">
      <ul class="nav_list">
        <li routerLink="/" class="home">Home</li>
      </ul>
      <ul class="account_list">
        <li routerLink="/admin">Admin</li>
        <li routerLink="/wishlist">Wishlist</li>
        <li routerLink="/cart">Cart</li>
        <li routerLink="/account">Account</li>
      </ul>
    </nav>
  </header>`,
  styleUrl: './header.component.scss',
})
export class HeaderComponent {}
