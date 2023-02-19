export type XO = 'X' | 'O' | '-';

export class Game {
  cells: XO[] = ['-', '-', '-', '-', '-', '-', '-', '-', '-'];
  turn: XO = 'X';
  getCells(): XO[] {
    return this.cells;
  }

  getTurn(): XO {
    return this.turn;
  }

  getWinner(): XO {
    const board = this.getCells();
    if (board[0] === board[1] && board[1] === board[2]) {
      return board[0];
    }
    if(board[3] === board[4] && board[4] === board[5]) {
      return board[3];
    }
    if(board[6] === board[7] && board[7] === board[8]) {
      return board[6];
    }
    if (board[0] === board[3] && board[3] === board[6]) {
      return board[0];
    }
    if (board[1] === board[4] && board[4] === board[7]) {
      return board[1];
    }
    if (board[2] === board[5] && board[5] === board[8]) {
      return board[2];
    }
    if (board[0] === board[4] && board[4] === board[8]) {
      return board[0];
    }
    if (board[2] === board[4] && board[4] === board[6]) {
      return board[2];
    }
    return '-';
  }

  isTie(): boolean {
    if (!this.cells.includes("-") && this.getWinner() === "-") {
      return true;
    }
    return false;
  }

  onClick(i: number): void {
    if (this.cells[i] !== '-' || this.getWinner() !== '-') return;
    this.cells[i] = this.getTurn();
    this.turn = this.turn === 'X' ? 'O' : 'X';
  }

  restart(): void {
    this.cells = ['-', '-', '-', '-', '-', '-', '-', '-', '-'];
    this.turn = 'X';
  }
}
