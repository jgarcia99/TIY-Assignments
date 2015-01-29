
var = require("lodash")
function print(board){
    var print(board) 
  console.log('<table class="chessboard">');

  _.forEach(board, function(row, rank){

      // Before any cells are printed...

      _.forEach(row, function(square, file){

          // In here, we have `rank`, `file`, and `square`...

      }); // END foreach(row)

      // After all the cells are printed...

  }); // END foreach(board)

  // After all the rows are printed...
  console.log('</table> <!-- .chessboard -->');
} // END print










//var board = [
//   
//    
//    
//    
//    
//    
//    
//    
//    ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R'],
//    ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
//    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
//    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
//    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
//    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
//    ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
//    ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r'] ];
//
//
//console.log(board.join('\n') + '\n\n');
//
//var printBoard = function() {
//    console.log(board.join('\n'));
//}
//
//function move (fromX, fromY, toX, toY){
//    board[4][4] = board[6][4];
//    board[6][4] = ' ';
//    printBoard();
// 
//};








// Move King's Pawn forward 2
//board[4][4] = board[6][4];
//board[6][4] = ' ';
//console.log(board.join('\n'));

// Move Queens Pawn forward 2
//board[4][3] = board [6][3];
//board[6][3] = ' ';
//console.log(board.join('\n'));



