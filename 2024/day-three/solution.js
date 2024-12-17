import { INPUT_DAY_THREE } from "./input.js";

const REGEX = /mul\(([A-Za-z0-9+\-*/.,\s]*)\)/g;

let corruptedString = INPUT_DAY_THREE.trim();
let totalSum = 0;

const info = [...corruptedString.matchAll(REGEX)];

info.map(([, values]) => {
    const result = values.split(',').map(e => +e).reduce((a, b) => a * b);

    totalSum += result;
});

console.log(totalSum)