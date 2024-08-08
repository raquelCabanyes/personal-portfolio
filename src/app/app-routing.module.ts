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
    path: 'portofolio',
    loadComponent: () =>
      import('./page/portofolio/portofolio.component').then(
        c => c.PortofolioComponent
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
