import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module')
      .then(module => module.HomeModule),
    pathMatch: 'full'
  },
  {
    path: 'mat-table-query-reflector',
    loadChildren: () => import('./consumer-modules/mat-table-query-reflector/mat-table-query-reflector.module')
      .then(module => module.MatTableQueryReflectorModule)
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
