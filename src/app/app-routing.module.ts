import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {
    path: 'counter-a',
    loadChildren: () =>
      import('./count-a/count-a.module').then((m) => m.CountAModule),
  },
  {
    path: 'counter-b',
    loadChildren: () =>
      import('./count-b/count-b.module').then((m) => m.CountBModule),
  },
  {
    path: '',
    redirectTo: 'counter-a',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
