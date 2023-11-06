import { Component } from '@angular/core';
import { CountService } from 'src/app/services/count.service';

@Component({
  selector: 'app-count-display-a',
  templateUrl: './count-display-a.component.html',
  styleUrls: ['./count-display-a.component.css'],
})
export class CountDisplayAComponent {
  constructor(private countService: CountService) {}

  getCount() {
    return this.countService.count;
  }

  getInstance() {
    return this.countService.instanceCount;
  }

  onClickIncrement() {
    this.countService.increment();
  }
}
