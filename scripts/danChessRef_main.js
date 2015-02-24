
var board = [];

// will house references to all pieces
var pieces = [];

// piece constructor. when used like new piece() it will 
// make a new instance of a piece
var piece = function(type, color, x, y) {
    this.type = type;
    this.color = color;
    this.x = x;
    this.y = y;
    this.assignCell = function(x, y) {
        board[x][y] = this;
    };
};


var generatePieces = function() {
    // have 8 * 8 loop make all 32 pieces
    
    // rooks
    pieces.push(new piece('rook', 'white', 0, 0));
    pieces.push(new piece('rook', 'white', 7, 0));
    pieces.push(new piece('rook', 'black', 0, 7));
    pieces.push(new piece('rook', 'black', 7, 7));

    pieces.push(new piece('knight', 'white', 1, 0));
    pieces.push(new piece('knight', 'white', 6, 0));
    pieces.push(new piece('knight', 'black', 7, 6));
    pieces.push(new piece('knight', 'black', 7, 1));

    // do this for the rest of the pieces
    pieces.push(new piece('bishop', 'white', 0, 0));
    pieces.push(new piece('bishop', 'white', 7, 0));
    pieces.push(new piece('bishop', 'black', 0, 7));
    pieces.push(new piece('bishop', 'black', 7, 7));

};

var generateBoard = function() {
    // have 8 * 8 make array "2-dimensional matrix"
    // during this phase you will simply make a large matrix full of board references
    // alternatively do
    peices[0].assignCell(0,0);
    
    board[0] = [];
    board[0][0] = peices[0];
};

var renderBoard = function() {
    // have 8 * 8 make array "2-dimensional matrix"
    
};

var renderPieces = function() {
    // traverse entire board and make sure each piece is on the right cell
    switch(peice.type) {
        case "rook" : 
            // render a rook
            // make sure to assign a class of .rook-white
            break;
    }
};