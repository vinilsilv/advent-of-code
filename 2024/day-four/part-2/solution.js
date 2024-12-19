import { INPUT_DAY_FOUR } from "../part-1/input.js";

const wordBoard = INPUT_DAY_FOUR.split('\n').map(e => e.split(''));

const targetLetter = 'A';
const validLettersAround = ['M', 'S'];
const validAmountOfOcurrencesPerLetter = 2;
let timesFound = 0;

function checkSameLetterOnOppositeEdges(topLine, bottomLine, letterIndex) {
    return topLine[letterIndex - 1] == bottomLine[letterIndex + 1] || bottomLine[letterIndex - 1] == topLine[letterIndex + 1];
}

function checkForTarget(lineIndex, letterIndex) {
    if (lineIndex === 0 || lineIndex === wordBoard.length - 1 ||
        letterIndex === 0 || letterIndex === wordBoard[lineIndex].length - 1)
        return;

    const topLine = wordBoard[lineIndex - 1];
    const bottomLine = wordBoard[lineIndex + 1];

    if(checkSameLetterOnOppositeEdges(topLine, bottomLine, letterIndex))
        return;

    const charactersAroundTargetLetter = [
        topLine[letterIndex - 1], topLine[letterIndex + 1],
        bottomLine[letterIndex - 1], bottomLine[letterIndex + 1],
    ];

    const validAmount = validLettersAround.every(char => {
        return charactersAroundTargetLetter.filter(e => e === char).length == validAmountOfOcurrencesPerLetter;
    });

    if (validAmount)
        timesFound += 1;
}

wordBoard.map((line, lineIndex) => {
    line.map((letter, letterIndex) => {
        if (letter === targetLetter) {
            checkForTarget(lineIndex, letterIndex);
        }
    })
});

console.log(timesFound);