import { Game } from './Game';

describe('Tic-Tac-Toe', () => {
  it('should start with blank state', () => {
    const game = new Game();

    expect(game.getCells()).toEqual([
      '-',
      '-',
      '-',
      '-',
      '-',
      '-',
      '-',
      '-',
      '-',
    ]);
    expect(game.getTurn()).toBe('X');
    expect(game.getWinner()).toBe('-');
    expect(game.isTie()).toBe(false);
  });
  it('should place players value on selected cell', () => {
    const game = new Game();
    game.onClick(0);
    expect(game.getCells()).toEqual([
      'X',
      '-',
      '-',
      '-',
      '-',
      '-',
      '-',
      '-',
      '-',
    ]);
    expect(game.getTurn()).toBe('O');
    expect(game.getWinner()).toBe('-');
    expect(game.isTie()).toBe(false);
  });

  it('should not change if clicked on a filled cell', () => {
    const game = new Game();
    game.onClick(0);
    game.onClick(1);
    game.onClick(1);

    expect(game.getCells()).toEqual([
      'X',
      'O',
      '-',
      '-',
      '-',
      '-',
      '-',
      '-',
      '-',
    ]);
    expect(game.getTurn()).toBe('X');
    expect(game.getWinner()).toBe('-');
    expect(game.isTie()).toBe(false);
  });
  it('should win the game if a row is filled by X', () => {
    const game = new Game();
    game.onClick(0);
    game.onClick(3);
    game.onClick(1);
    game.onClick(4);
    game.onClick(2);

    expect(game.getCells()).toEqual([
      'X',
      'X',
      'X',
      'O',
      'O',
      '-',
      '-',
      '-',
      '-',
    ]);
    expect(game.getTurn()).toBe('O');
    expect(game.getWinner()).toBe('X');
    expect(game.isTie()).toBe(false);
  });
  it('should win the game if a column is filled by O', () => {
    const game = new Game();
    game.onClick(0);
    game.onClick(1);
    game.onClick(6);
    game.onClick(4);
    game.onClick(8);
    game.onClick(7);

    expect(game.getCells()).toEqual([
      'X',
      'O',
      '-',
      '-',
      'O',
      '-',
      'X',
      'O',
      'X',
    ]);
    expect(game.getTurn()).toBe('X');
    expect(game.getWinner()).toBe('O');
    expect(game.isTie()).toBe(false);
  });
  it('should win the game if a diagonal is filled by X', () => {
    const game = new Game();
    game.onClick(0);
    game.onClick(1);
    game.onClick(4);
    game.onClick(7);
    game.onClick(8);

    expect(game.getCells()).toEqual([
      'X',
      'O',
      '-',
      '-',
      'X',
      '-',
      '-',
      'O',
      'X',
    ]);
    expect(game.getTurn()).toBe('O');
    expect(game.getWinner()).toBe('X');
    expect(game.isTie()).toBe(false);
  });
  it('should restart the game when game won and pressed Play Again', () => {
    const game = new Game();
    game.onClick(0);
    game.onClick(3);
    game.onClick(1);
    game.onClick(4);
    game.onClick(2);
    game.restart();
    

    expect(game.getCells()).toEqual([
      '-',
      '-',
      '-',
      '-',
      '-',
      '-',
      '-',
      '-',
      '-',
    ]);
    expect(game.getTurn()).toBe('X');
    expect(game.getWinner()).toBe('-');
    expect(game.isTie()).toBe(false);
  });
  it('should show a tie when there is no winner and all cells are filled', () => {
    const game = new Game();
    game.onClick(0);
    game.onClick(2);
    game.onClick(1);
    game.onClick(3);
    game.onClick(5);
    game.onClick(8);
    game.onClick(6);
    game.onClick(7);
    game.onClick(4);

    

    expect(game.getCells()).toEqual([
      'X',
      'X',
      'O',
      'O',
      'X',
      'X',
      'X',
      'O',
      'O',
    ]);
    expect(game.getTurn()).toBe('O');
    expect(game.getWinner()).toBe('-');
    expect(game.isTie()).toBe(true);
  });
});
