import { INPUT_DAY_ONE_2 } from "./input.js";

let firstColumn = [];
let secondColumn = [];

INPUT_DAY_ONE_2.replace(/[\s\r\n]+/g, ',').split(',').map((e, index) => {
    index % 2 == 0
        ? firstColumn.push(+e)
        : secondColumn.push(+e)
})

let totalSum = 0;

firstColumn.map(e => {
    const occurencesInSecondColumn = secondColumn.filter(n => n === e).length;
    totalSum += e * occurencesInSecondColumn;
});

console.log(totalSum)