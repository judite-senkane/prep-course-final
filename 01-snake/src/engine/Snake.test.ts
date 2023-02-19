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
    snake.setDirection("Left");
    snake.move();
    expect(snake.getHead()).toEqual(new Cell(1, 1));
    expect(snake.getTail()).toEqual([new Cell(2, 1), new Cell(2, 0)]);
  });
   it('should move the snake up', () => {
     const snake = new Snake();
     snake.setDirection('Up');
     snake.move();
     expect(snake.getHead()).toEqual(new Cell(2, -1));
     expect(snake.getTail()).toEqual([new Cell(1, 0), new Cell(2, 0)]);
   });
});
