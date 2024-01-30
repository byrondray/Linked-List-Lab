import { ISortable } from "./interface";

export class String implements ISortable {
  length: number;
  data: string;

  constructor(data: string) {
    this.data = data;
    this.length = data.length;
  }

  compare(leftSide: number, rightSide: number): boolean {
    return this.data.charCodeAt(leftSide) > this.data.charCodeAt(rightSide);
  }

  swap(leftSide: number, rightSide: number): void {
    let stringArray = this.data.split("");

    let tempLeft = stringArray[leftSide];
    let tempRight = stringArray[rightSide];

    let temp = tempLeft;
    tempLeft = tempRight;
    tempRight = temp;

    this.data = stringArray.join("");
  }
}
