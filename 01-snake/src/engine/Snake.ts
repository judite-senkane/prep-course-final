import { Cell } from './Cell';
import { Direction } from './Direction';

export class Snake {
  head: Cell = new Cell(2, 0);
  tail: Cell[] = [new Cell(0, 0), new Cell(1, 0)];
  direction: Direction = 'Right';
  setDirection(newDirection: Direction) {
    this.direction = newDirection;
  }

  move() {
    const oldHead: Cell = this.getHead();
    this.tail.shift();
    this.tail.push(new Cell(oldHead.x, oldHead.y));
    if (this.direction === 'Right') {
      this.head = new Cell(this.head.x + 1, this.head.y);
    } else if (this.direction === 'Down') {
      this.head = new Cell (oldHead.x, oldHead.y+1);
    }
  }

  grow() {}

  getHead(): Cell {
    return this.head;
  }

  getDirection(): Direction {
    return 'Right';
  }

  getTail(): Cell[] {
    return this.tail;
  }

  isTakenBySnake(cell: Cell): boolean {
    return false;
  }
}
