import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountDisplayAComponent } from './count-display-a/count-display-a.component';
import { CountDisplayBComponent } from './count-display-b/count-display-b.component';
import { CountService } from '../services/count.service';

@NgModule({
  declarations: [CountDisplayAComponent, CountDisplayBComponent],
  imports: [CommonModule],
  exports: [CountDisplayAComponent, CountDisplayBComponent],
  providers: [CountService],
})
export class CountAModule {}
