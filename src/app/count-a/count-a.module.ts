import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountDisplayAComponent } from './count-display-a/count-display-a.component';
import { CountService } from '../services/count.service';

@NgModule({
  declarations: [CountDisplayAComponent],
  imports: [CommonModule],
  exports: [CountDisplayAComponent],
  providers: [CountService],
})
export class CountAModule {}
