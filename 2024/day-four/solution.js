import { INPUT_DAY_FOUR } from "./input.js";

const wordBoard = INPUT_DAY_FOUR.split('\n').map(e => e.split(''));

const targetWord = 'XMAS';
const targetLetter = 'X';
let timesFound = 0;

function checkForHorizontalWord(lineIndex, letterIndex) {
    const wordForwards = wordBoard[lineIndex].slice(letterIndex, letterIndex + targetWord.length).join('');   
    const wordBackwards = wordBoard[lineIndex].slice(letterIndex - targetWord.length, letterIndex).join('');

    if(wordForwards == targetWord)
        timesFound += 1;

    if(wordBackwards == targetWord)
        timesFound += 1;
}

function checkForVerticalWord(lineIndex, letterIndex) {        
    let wordForwards = '';
    let wordBackwards = '';

    for (let i = 0; i < targetWord.length; i++) {
        const lineForwards = wordBoard[lineIndex + i];
        if(!lineForwards)
            return false;

        wordForwards += lineForwards[letterIndex];
    }

    for (let i = 0; i < targetWord.length; i++) {
        const lineBackwards = wordBoard[lineIndex - i];
        
        if(!lineBackwards)
            return false;
        wordBackwards += lineBackwards[letterIndex];    
    }

    if(wordForwards == targetWord)
        timesFound += 1;

    if(wordBackwards == targetWord)
        timesFound += 1;
}

function checkForDiagonalLeftTop(lineIndex, letterIndex) {
    let word = '';

    for (let i = 0; i < targetWord.length; i++) {
        const linePos = wordBoard[lineIndex - i];
        if(!linePos)
            return false;

        word += linePos[letterIndex - i];   
    }

    if(word == targetWord)
        timesFound += 1;
}

function checkForDiagonalRightTop(lineIndex, letterIndex) {
    let word = '';

    for (let i = 0; i < targetWord.length; i++) {
        const linePos = wordBoard[lineIndex + i];
        if(!linePos)
            return false;

        word += linePos[letterIndex - i];   
    }

    if(word == targetWord)
        timesFound += 1;
}

function checkForDiagonalLeftBottom(lineIndex, letterIndex) {
    let word = '';

    for (let i = 0; i < targetWord.length; i++) {
        const linePos = wordBoard[lineIndex - i];
        if(!linePos)
            return false;

        word += linePos[letterIndex + i];   
    }

    if(word == targetWord)
        timesFound += 1;
}

function checkForDiagonalRightBottom(lineIndex, letterIndex) {
    let word = '';

    for (let i = 0; i < targetWord.length; i++) {
        const linePos = wordBoard[lineIndex + i];
        if(!linePos)
            return false;

        word += linePos[letterIndex + i];   
    }

    if(word == targetWord)
        timesFound += 1;
}

function checkDiagonally(lineIndex, letterIndex) {
    checkForDiagonalLeftTop(lineIndex, letterIndex)
    checkForDiagonalRightTop(lineIndex, letterIndex)
    checkForDiagonalLeftBottom(lineIndex, letterIndex)
    checkForDiagonalRightBottom(lineIndex, letterIndex)
}

function checkForTargetWord(lineIndex, letterIndex) {
    checkForHorizontalWord(lineIndex, letterIndex);
    checkForVerticalWord(lineIndex, letterIndex);
    checkDiagonally(lineIndex, letterIndex);
}

wordBoard.map((line, lineIndex) => {
    line.map((letter, letterIndex) => {
        if(letter == targetLetter)
            checkForTargetWord(lineIndex, letterIndex);
    })
})

console.log(timesFound)