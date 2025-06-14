// 1. countVowels
function countVowels(str) {
    const vowels = 'aeiouAEIOU';
    let count = 0;
    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}

// 2. sortNumbers
function sortNumbers(arr) {
    return arr.sort((a, b) => a - b);
}

// 3. reverseString
function reverseString(str) {
    return str.split('').reverse().join('');
}

// 4. getLastElement
function getLastElement(arr) {
    return arr[arr.length - 1];
}

// 5. mergeArrays
function mergeArrays(arr1, arr2) {
    return [...arr1, ...arr2];
}

// 6. hasSpace
function hasSpace(str) {
    return str.includes(' ');
}

// 7. isEmptyString
function isEmptyString(str) {
    return str.length === 0;
}

// 8. removeNegativeNumbers
function removeNegativeNumbers(arr) {
    return arr.filter(num => num >= 0);
}

// Example usage:
console.log(countVowels("Your Name")); // 4
console.log(sortNumbers([4, 1, 8, 3])); // [1, 3, 4, 8]
console.log(reverseString("hello")); // "olleh"
console.log(getLastElement([10, 20, 30, 40])); // 40
console.log(mergeArrays([1, 2], [3, 4])); // [1, 2, 3, 4]
console.log(hasSpace("Ostad Limited")); // true
console.log(isEmptyString("")); // true
console.log(isEmptyString("Hello")); // false
console.log(removeNegativeNumbers([-5, 2, -1, 6, 0])); // [2, 6, 0]
