import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountDisplayAComponent } from './count-a/count-display-a/count-display-a.component';
import { CountDisplayBComponent } from './count-b/count-display-b/count-display-b.component';

const appRoutes: Routes = [
  { path: 'counter-a', component: CountDisplayAComponent },
  { path: 'counter-b', component: CountDisplayBComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
