import { GameField } from './GameField';
import { Cell } from './Cell';

describe('Game Field', () => {
  it('should have five apples present', () => {
    const field = new GameField();

    const apples = field.getApples();

    expect(apples.length).toBe(5);
  });
  it('should check if apple is inside', () => {
    const field = new GameField();
    const apples = field.getApples();
    const cell = new Cell(18, 16);
    apples.push(cell);

    expect(field.isAppleInside(cell)).toBe(true);
  });

  it('should remove an apple if eaten', () => {
    const field = new GameField();
    const apples = field.getApples();
    const cell = new Cell(18, 16);
    apples.push(cell);
    field.removeApple(cell);

    expect(
      apples.find((element) => element.x === cell.x && element.y === cell.y)
        ? true
        : false
    ).toBe(false);
  });
  it('should return empty when all apples are eaten', () => {
    const field = new GameField();
    const apples: Cell[] = field.getApples();
    field.removeApple(apples[0]);
    field.removeApple(apples[0]);
    field.removeApple(apples[0]);
    field.removeApple(apples[0]);
    field.removeApple(apples[0]);

    expect(field.isEmpty()).toBe(true);
  });
  it('should seed apples when all are eaten', () => {
    const field = new GameField();
    let apples = field.getApples();
    field.removeApple(apples[0]);
    field.removeApple(apples[0]);
    field.removeApple(apples[0]);
    field.removeApple(apples[0]);
    field.removeApple(apples[0]);
    field.seed();
    apples = field.getApples();

    expect(apples.length).toBe(5);
  });
});
