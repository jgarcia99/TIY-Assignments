var board = [
    ['0','1', '2', '3', '4', '5', '6', '7', '8'],
    ['1','R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R'],
    ['2','P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
    ['3',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    ['4',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    ['5',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    ['6',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    ['7','p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
    ['8','r', 'n', 'b', 'q', 'k', 'b', 'n', 'r']];

console.log(board.join('\n') + '\n\n');

// Move King's Pawn forward 2
board[4][4] = board[6][4];
board[6][4] = ' ';
console.log(board.join('\n'));

