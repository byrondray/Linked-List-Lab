import { ISortable } from "./interface";

export class NumberGroup implements ISortable {
  length: number;
  data: number[];

  constructor(data: number[]) {
    this.data = data;
    this.length = this.data.length;
  }

  compare(leftSide: number, rightSide: number): boolean {
    if (this.data[leftSide] > this.data[rightSide]) {
      return true;
    } else {
      return false;
    }
  }
  swap(leftSide: number, rightSide: number): void {
     let tempLeft = this.data[leftSide];
  this.data[leftSide] = this.data[rightSide];
  this.data[rightSide] = tempLeft;
  }
}
