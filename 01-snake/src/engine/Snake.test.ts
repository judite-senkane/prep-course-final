import { Snake } from './Snake';
import { Cell } from './Cell';

describe('Snake', () => {
  it('should take three cells at the beginning', () => {
    const snake = new Snake();

    expect(snake.getHead()).toEqual(new Cell(2, 0));
    expect(snake.getTail()).toEqual([new Cell(0, 0), new Cell(1, 0)]);
  });
  it('should move the snake right', () => {
    const snake = new Snake();
    snake.move();
    expect(snake.getHead()).toEqual(new Cell(3, 0));
    expect(snake.getTail()).toEqual([new Cell(1, 0), new Cell(2, 0)]);
  });
  it('should move the snake down', () => {
    const snake = new Snake();
    snake.setDirection('Down');
    snake.move();
    expect(snake.getHead()).toEqual(new Cell(2, 1));
    expect(snake.getTail()).toEqual([new Cell(1, 0), new Cell(2, 0)]);
  });
  it('should move the snake left', () => {
    const snake = new Snake();
    snake.setDirection('Down');
    snake.move();
    snake.setDirection('Left');
    snake.move();
    expect(snake.getHead()).toEqual(new Cell(1, 1));
    expect(snake.getTail()).toEqual([new Cell(2, 0), new Cell(2, 1)]);
  });
  it('should move the snake up', () => {
    const snake = new Snake();
    snake.setDirection('Up');
    snake.move();
    expect(snake.getHead()).toEqual(new Cell(2, -1));
    expect(snake.getTail()).toEqual([new Cell(1, 0), new Cell(2, 0)]);
  });
  it('should not react when moved left if the direction is right', () => {
    const snake = new Snake();
    snake.move();
    snake.setDirection('Left');
    snake.move();
    expect(snake.getHead()).toEqual(new Cell(4, 0));
    expect(snake.getTail()).toEqual([new Cell(2, 0), new Cell(3, 0)]);
  });
  it('should grow when eaten an apple', () => {
    const snake = new Snake();
    snake.move();
    snake.grow();

    expect(snake.getHead()).toEqual(new Cell(3, 0));
    expect(snake.getTail()).toEqual([
      new Cell(0, 0),
      new Cell(1, 0),
      new Cell(2, 0),
    ]);
  });
  it('should stop the game if eaten by snake', () => {
    const snake = new Snake();
    snake.move();
    snake.grow();
    snake.move();
    snake.grow();
    snake.setDirection('Down');
    snake.move();
    snake.setDirection('Left');
    snake.move();
    snake.setDirection('Up');
    snake.move();

    expect(snake.getHead()).toEqual(new Cell(3, 0));
    expect(snake.getTail()).toEqual([
      new Cell(3, 0),
      new Cell(4, 0),
      new Cell(4, 1),
      new Cell(3, 1),
    ]);
    expect(snake.isTakenBySnake(new Cell(3, 0))).toBe(true);
  });
});
