import { Cell } from './Cell';

export class GameField {
  /**
   * Called when level completed
   */
  apples: Cell[] = [
    new Cell(Math.floor(Math.random() * 45), Math.floor(Math.random() * 25)),
    new Cell(Math.floor(Math.random() * 45), Math.floor(Math.random() * 25)),
    new Cell(Math.floor(Math.random() * 45), Math.floor(Math.random() * 25)),
    new Cell(Math.floor(Math.random() * 45), Math.floor(Math.random() * 25)),
    new Cell(Math.floor(Math.random() * 45), Math.floor(Math.random() * 25)),
  ];
  seed(): void {
    if (this.isEmpty()) {
      this.apples = [
        new Cell(
          Math.floor(Math.random() * 45),
          Math.floor(Math.random() * 25)
        ),
        new Cell(
          Math.floor(Math.random() * 45),
          Math.floor(Math.random() * 25)
        ),
        new Cell(
          Math.floor(Math.random() * 45),
          Math.floor(Math.random() * 25)
        ),
        new Cell(
          Math.floor(Math.random() * 45),
          Math.floor(Math.random() * 25)
        ),
        new Cell(
          Math.floor(Math.random() * 45),
          Math.floor(Math.random() * 25)
        ),
      ];
    }
  }

  getApples(): Cell[] {
    return this.apples;
  }

  isAppleInside(cell: Cell): boolean {
    if (
      this.apples.find(
        (element) => element.x === cell.x && element.y === cell.y
      )
    ) {
      return true;
    }
    return false;
  }

  removeApple(cell: Cell): void {
    const cellIndex = this.apples.findIndex(
      (element) => element.x === cell.x && element.y === cell.y
    );
    this.apples.splice(cellIndex, 1);
  }

  isEmpty(): boolean {
    if (this.apples.length < 1) {
      return true;
    }
    return false;
  }
}
