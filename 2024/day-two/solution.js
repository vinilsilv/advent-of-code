import { INPUT_DAY_TWO } from "./input.js";

const levels = INPUT_DAY_TWO
    .split('\n')
    .filter(n => n)
    .map(e => e.split(" ").map(n => +n));

function checkSafetyInLevel(isIncreasing, levelArray) {
    return levelArray.map((currentLevel, i) => {
            const previousLevel = levelArray[i - 1];
            if(i == 0) return true;

            const correctBehavior = isIncreasing
                ? previousLevel < currentLevel
                : previousLevel > currentLevel;

            const diff = Math.abs(previousLevel - currentLevel);
            const safeDiff = diff <= 3 && diff >= 1;

            return correctBehavior && safeDiff;
    }).every(safe => !!safe);
}

const safeLevels = levels.map(arr => {
    const isIncreasing = arr[0] < arr[1];
    return checkSafetyInLevel(isIncreasing, arr);
}).filter(safe => !!safe);

console.log(safeLevels.length);