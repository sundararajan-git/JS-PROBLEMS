/*
Given a Rubik's Cube with a 
side length of n, return the number
of individual stickers that are needed
to cover the whole cube.

1. The Rubik's cube of side length 1 has 6 stickers.
2. The Rubik's cube of side length 2 has 24 stickers.
3. The Rubik's cube of side length 3 has 54 stickers.
*/

function howManyStickers(x){
    //  1 cube has 6 side so 6 is constant
    //  x is number of row and column in each side
    console.log((x*x)*6)
}


howManyStickers(1)

howManyStickers(2) 

howManyStickers(3)


