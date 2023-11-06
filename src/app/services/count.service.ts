import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountService {
  static classCount = 0;
  instanceCount: number;
  #count: number = 0;

  constructor() {
    this.instanceCount = CountService.classCount;
    CountService.classCount++;
  }

  get count() {
    return this.#count;
  }

  increment() {
    this.#count++;
  }
}
