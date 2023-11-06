import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountDisplayAComponent } from './count-display-a/count-display-a.component';
import { CountService } from '../services/count.service';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: CountDisplayAComponent
  }
];

@NgModule({
  declarations: [CountDisplayAComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [CountDisplayAComponent],
  providers: [CountService],
})
export class CountAModule {}
