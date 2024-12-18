import { INPUT_DAY_THREE_2 } from "./input.js";

const REGEX = /\b(?:mul|do|don['’]t)\(([\w\s,.\+\-\*/%]*)\)/g;

let corruptedString = INPUT_DAY_THREE_2.trim();
let totalSum = 0;
let mulOperationEnabled = true;

const info = [...corruptedString.matchAll(REGEX)];

info.map(([operation, values]) => {
    if(operation.match('do()'))
        mulOperationEnabled = true;

    if(operation.match('don\'t()'))
        mulOperationEnabled = false;

    if(operation.match('mul') && mulOperationEnabled) {
        const result = values.split(',').map(e => +e).reduce((a, b) => a * b);
        totalSum += result;
    }
});

// solution
console.log(totalSum)