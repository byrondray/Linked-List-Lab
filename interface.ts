export interface ISortable {
  length: number;

  compare(leftPosition: number, rightPosition: number): boolean;
  swap(leftPosition: number, rightPosition: number): void;
}
