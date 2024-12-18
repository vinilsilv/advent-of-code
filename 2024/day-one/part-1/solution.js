import {INPUT_DAY_ONE } from './input.js';

let firstColumn = [];
let secondColumn = [];

INPUT_DAY_ONE.replace(/[\s\r\n]+/g, ',').split(',').map((e, index) => {
    index % 2 == 0
        ? firstColumn.push(+e)
        : secondColumn.push(+e)
});

firstColumn.sort((a, b) => a - b);
secondColumn.sort((a, b) => a - b);

let differenceSum = 0;

firstColumn.map((e, index) => {
    differenceSum += Math.abs(e - secondColumn[index])
});

// solution
console.log(differenceSum);