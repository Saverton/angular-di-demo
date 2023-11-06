import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountDisplayBComponent } from './count-display-b/count-display-b.component';
import { CountService } from '../services/count.service';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: CountDisplayBComponent,
  },
];

@NgModule({
  declarations: [CountDisplayBComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [CountDisplayBComponent],
  providers: [CountService],
})
export class CountBModule {}
