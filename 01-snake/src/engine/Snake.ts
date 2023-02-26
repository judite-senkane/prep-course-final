import { Cell } from './Cell';
import { Direction } from './Direction';

export class Snake {
  head: Cell = new Cell(2, 0);
  tail: Cell[] = [new Cell(0, 0), new Cell(1, 0)];
  direction: Direction = 'Right';

  setDirection(newDirection: Direction) {
    const oldDirection = this.direction;
    if (oldDirection === 'Right' && newDirection === 'Left') return;
    if (oldDirection === 'Left' && newDirection === 'Right') return;
    if (oldDirection === 'Up' && newDirection === 'Down') return;
    if (oldDirection === 'Down' && newDirection === 'Up') return;

    this.direction = newDirection;
  }

  move() {
    const oldHead: Cell = this.getHead();
    this.tail.shift();
    this.tail.push(new Cell(oldHead.x, oldHead.y));
    switch (this.direction) {
      case 'Right':
        this.head = new Cell(this.head.x + 1, this.head.y);
        break;
      case 'Down':
        this.head = new Cell(oldHead.x, oldHead.y + 1);
        break;
      case 'Left':
        this.head = new Cell(oldHead.x - 1, oldHead.y);
        break;
      case 'Up':
        this.head = new Cell(oldHead.x, oldHead.y - 1);
        break;
    }
  }

  grow() {
    const oldTail: Cell[] = this.getTail();
    switch (this.direction) {
      case 'Right':
        this.tail.unshift(new Cell(oldTail[0].x - 1, oldTail[0].y));
        break;
      case 'Down':
        this.tail.unshift(new Cell(oldTail[0].x, oldTail[0].y - 1));
        break;
      case 'Left':
        this.tail.unshift(new Cell(oldTail[0].x + 1, oldTail[0].y));
        break;
      case 'Up':
        this.tail.unshift(new Cell(oldTail[0].x, oldTail[0].y - 1));
        break;
    }
  }

  getHead(): Cell {
    return this.head;
  }

  getDirection(): Direction {
    return this.direction;
  }

  getTail(): Cell[] {
    return this.tail;
  }

  isTakenBySnake(cell: Cell): boolean {
    const tail: Cell[] = this.getTail();
    if (tail.find(element => element.x === cell.x && element.y === cell.y)) {
      return true;
    }
    return false;
  }
}
