import { Component } from '@angular/core';
import { CountService } from 'src/app/services/count.service';

@Component({
  selector: 'app-count-display-b',
  templateUrl: './count-display-b.component.html',
  styleUrls: ['./count-display-b.component.css'],
})
export class CountDisplayBComponent {
  constructor(private countService: CountService) {}

  getCount() {
    return this.countService.count;
  }

  onClickIncrement() {
    this.countService.increment();
  }
}
