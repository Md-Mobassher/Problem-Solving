/* Task-06: Array Reduction
Create an array of numbers. Write a function that uses the reduce method to calculate the sum of all even numbers in the array. */

const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sumEvenNumbers = numbers.reduce((acc: number, num: number): number => {
  if (num % 2 === 0) {
    acc += num;
  }
  return acc;
}, 0);

console.log(sumEvenNumbers); // Output: 30

/* Task-07: Leap Year Checker
Write a function that determines whether a given year is a leap year. */

function isLeapYear(year: number): boolean {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

console.log(isLeapYear(2024)); // Output: true
console.log(isLeapYear(2023)); // Output: false

/* Task-08: Count Vowels:
Write a function that counts the number of vowels in a given string.
Example: Happy New Year */

function countVowels(str: string): number {
  const vowels: string = "aeiouAEIOU";
  let count: number = 0;

  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }

  return count;
}

console.log(countVowels("Happy New Year")); // Output: 4

/* Task-09: Unique Values
Create an array of numbers with some duplicate values. Write a function to filter out the duplicate values and return a new array with only unique numbers. Print the result. */

const numbersWithDuplicates: number[] = [1, 2, 2, 3, 4, 4, 5, 6, 6, 7];

function getUniqueValues(arr: number[]): number[] {
  return [...new Set(arr)];
}

console.log(getUniqueValues(numbersWithDuplicates)); // Output: [1, 2, 3, 4, 5, 6, 7]

/* Task-10: Find Maximum Value:
Write a function that takes an array of numbers and returns the maximum value. */

function findMaxValue(arr: number[]): number {
  return Math.max(...arr);
}

const numbersArray: number[] = [10, 20, 30, 5, 15];
console.log(findMaxValue(numbersArray)); // Output: 30
