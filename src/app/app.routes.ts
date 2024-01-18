import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { MovieComponent } from './components/movie/movie.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    component: LoginComponent,
    data: { animation: 'isRight' },
  },
  {
    path: 'home',
    component: HomeComponent,
    data: { animation: 'isRight' },
  },
  {
    path: 'movie/:type/:id',
    component: MovieComponent,
    data: { animation: 'isRight' },
  },
  { path: '**', component: LoginComponent },
];
