import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountService {
  #count: number = 0;

  constructor() { }

  get count() {
    return this.#count;
  }

  increment() {
    this.#count++;
  }
}
