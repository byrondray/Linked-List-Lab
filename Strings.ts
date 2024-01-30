import { ISortable } from "./interface";

export class String implements ISortable {
  length: number;

  compare(a: string, b: string): boolean {}

  swap(a: string, b: string): void {}
}
