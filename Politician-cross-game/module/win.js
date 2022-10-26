/** winning combinations of the game */
export const WIN_COMBINATIONS = [
    [0, 1, 2], // horizontal
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6], // verticle
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8], // diagonal check
    [2, 4, 8]
];

/** check for winner */
export function checkWin(currentClass, blockElements){
    let winMatch = [];

    WIN_COMBINATIONS.some(combination => {
        winMatch.push(combination.every(index => {
            return blockElements[index].classList.contains(currentClass);
        }));

    })
    return winMatch || null;
}


