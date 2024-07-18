import { Routes } from '@angular/router';
import {
  AdminPage,
  MainPage,
  AccountPage,
  CartPage,
  WishlistPage,
  ComparePage,
} from '@/pages';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => MainPage,
  },
  {
    path: 'wishlist',
    loadComponent: () => WishlistPage,
  },
  {
    path: 'cart',
    loadComponent: () => CartPage,
  },
  {
    path: 'compare',
    loadComponent: () => ComparePage,
  },
  {
    path: 'account',
    loadComponent: () => AccountPage,
  },
  {
    path: 'admin',
    loadComponent: () => AdminPage,
  },
];
