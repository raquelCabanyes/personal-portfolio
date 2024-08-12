import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadComponent: () =>
      import('./page/home/home.component').then(c => c.HomeComponent),
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./page/about/about.component').then(c => c.AboutComponent),
  },
  {
    path: 'experience',
    loadComponent: () =>
      import('./page/experience/experience.component').then(
        c => c.ExperienceComponent
      ),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'home',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
