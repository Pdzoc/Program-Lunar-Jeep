/*
1 - wall
2 - player
3 - exit
*/

let levels = {
    1: [
        [1,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,1,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,2,0,0,0,3,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,1,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,1,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
    ],
    2: [
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,1,1,1,0,0,0,0,0,0],
        [0,0,2,1,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,1,0,0,0,0,0,0],
        [3,0,0,1,0,0,0,0,0,0],
        [1,1,1,1,0,0,0,0,0,0],
    ],
    3: [
        [2,0,1,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [1,1,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,1,1,1,0,0],
        [0,0,0,0,0,0,3,1,0,0],
        [0,0,0,0,0,0,1,1,0,0],
    ],
    4: [
        [1,0,0,0,1,0,0,0,0,0],
        [1,0,0,0,1,0,0,3,0,0],
        [1,0,0,0,1,0,0,1,0,0],
        [1,0,0,0,1,1,1,1,0,0],
        [1,0,0,0,0,0,0,0,0,0],
        [1,0,0,0,0,0,0,0,0,0],
        [1,0,0,0,0,0,0,0,0,0],
        [1,0,2,0,0,0,0,0,0,0],
        [1,0,0,0,0,0,0,0,0,0],
        [1,0,0,0,0,0,0,0,0,0],
    ],
    5: [
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,1,0,0,0],
        [0,0,0,0,0,1,0,3,0,0],
        [0,0,0,0,1,0,0,1,0,0],
        [0,0,0,1,0,0,1,0,0,0],
        [0,0,1,0,0,1,0,0,0,0],
        [0,1,0,0,1,0,0,0,0,0],
        [1,0,0,1,0,0,0,0,0,0],
        [1,2,1,0,0,0,0,0,0,0],
        [0,1,0,0,0,0,0,0,0,0],
    ],
    6: [
        [0,0,0,0,0,0,0,0,0,0],
        [0,1,1,1,1,1,1,1,1,0],
        [0,1,0,0,0,0,0,0,1,0],
        [0,1,0,1,1,1,1,0,1,0],
        [0,1,0,1,0,3,1,0,1,0],
        [0,1,0,1,0,0,1,0,1,0],
        [0,1,0,1,0,1,1,0,1,0],
        [0,1,0,1,0,0,0,0,1,0],
        [0,1,0,1,1,1,1,1,1,0],
        [2,1,0,0,0,0,0,0,0,0],
    ],
    7: [
        [1,2,0,0,0,0,0,0,1,0],
        [3,1,0,0,0,0,0,0,0,0],
        [0,0,1,0,0,0,1,0,0,0],
        [0,0,0,1,0,1,0,0,0,0],
        [0,0,0,0,1,0,0,0,0,0],
        [0,0,0,1,0,1,0,0,0,0],
        [0,0,1,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,1,0,0],
        [1,0,0,0,0,0,0,0,1,0],
        [0,0,0,0,0,0,0,0,0,1],
    ],
    8: [
        [0,0,0,1,0,0,0,0,0,0],
        [0,1,0,1,0,0,1,1,1,0],
        [0,1,0,1,0,0,1,3,1,0],
        [0,1,0,1,0,0,1,0,1,0],
        [0,1,0,1,0,0,1,0,1,0],
        [0,1,0,1,0,0,1,0,1,0],
        [0,1,0,1,0,0,1,0,1,0],
        [0,1,2,1,0,0,1,0,1,0],
        [0,1,1,1,0,0,1,0,1,0],
        [0,0,0,0,0,0,1,0,0,0],
    ],
    9: [
        [1,1,1,1,1,1,0,0,0,3],
        [1,1,0,0,0,1,0,1,1,0],
        [1,1,0,1,0,0,0,1,1,0],
        [1,1,0,1,1,1,1,1,0,0],
        [1,1,0,1,1,1,1,1,0,1],
        [2,0,0,1,1,1,1,1,0,1],
        [0,0,0,0,1,1,0,0,0,1],
        [1,1,1,0,0,0,0,1,1,1],
        [1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1]
    ],
}
