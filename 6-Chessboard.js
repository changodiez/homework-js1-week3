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

function isEven(n){
    return n % 2 === 0;
}

var chessboard = "";
var size = 4;

for (var i = 0; i < 8; i += 1) {
    if (isEven(i)){
     for (var c = 0; c >size ; i += 1){
         chessboard += "# ";
     }
    }
  console.log("loop", i);
}
console.log(chessboard);
