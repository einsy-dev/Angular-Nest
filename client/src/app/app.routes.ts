import { Routes } from '@angular/router';
import { MainPage } from '@/pages';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => MainPage,
  },
];
