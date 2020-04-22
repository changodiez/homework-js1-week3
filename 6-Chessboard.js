/*
Chessboard
Write a program that creates a string that represents an 8�8 grid, using newline
characters to separate lines. At each position of the grid there is either a space
or a "#" character. The characters should form a chessboard.

Passing this string to console.log should show something like this:

 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #

When you have a program that generates this pattern, define a binding size
= 8 and change the program so that it works for any size, outputting a grid
of the given width and height
*/

/* 
# # # ## # # #  FIRST WAY # # # ## # # ## # # #
*/

function Chessboard(width, height){

function isEven(n) {
    return n % 2 === 0;
}

var chessboard = "";
var width = width*2;
for (j = 0; j < height; j++) {
    if (isEven(j)) {
        for (i = 0; i < width; i++) {
            if (isEven(i)) {
                chessboard += " ";
            } else {
                chessboard += "#";
            }
        }

        chessboard += '\n';
    } else {
        for (i = 0; i < width; i++) {
            if (isEven(i)) {
                chessboard += "#";
            } else {
                chessboard += " ";
            }
        }chessboard += '\n';
    } 
    
}

return chessboard;
}

console.log(Chessboard(4,8));

