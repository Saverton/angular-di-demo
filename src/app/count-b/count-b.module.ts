import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountDisplayBComponent } from './count-display-b/count-display-b.component';
import { CountService } from '../services/count.service';


@NgModule({
  declarations: [CountDisplayBComponent],
  imports: [CommonModule],
  exports: [CountDisplayBComponent],
  providers: [CountService],
})
export class CountBModule {}
