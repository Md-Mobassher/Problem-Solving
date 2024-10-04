// Task-11: Advanced Sorting
// Create an array of objects representing students with 'name' and 'grades' properties. Write a function to sort the students by average grade in descending order.

type TStudent = {
  name: string;
  grades: number[];
};
const students: TStudent[] = [
  { name: "Mobassher", grades: [70, 80, 65] },
  { name: "Hossain", grades: [78, 85, 79] },
  { name: "Rashed", grades: [85, 92, 88] },
  { name: "Raiyan", grades: [95, 90, 93] },
];

const sortStudentsByAverageGrade = (students: TStudent[]): TStudent[] => {
  return students.sort((a, b) => {
    const averageGradeA =
      a.grades.reduce((acc, grade) => acc + grade, 0) / a.grades.length;
    const averageGradeB =
      b.grades.reduce((acc, grade) => acc + grade, 0) / b.grades.length;
    return averageGradeB - averageGradeA;
  });
};

const sortedStudentsByAvarageGrade = sortStudentsByAverageGrade(students);
console.log(sortedStudentsByAvarageGrade);
// output [
//   { name: 'Raiyan', grades: [ 95, 90, 93 ] },
//   { name: 'Rashed', grades: [ 85, 92, 88 ] },
//   { name: 'Hossain', grades: [ 78, 85, 79 ] },
//   { name: 'Mobassher', grades: [ 70, 80, 65 ] }
// ]

// Task-12: Functional Programming - Reduce
// Write a function that uses the reduce function to calculate the total value of an array of objects with a 'quantity' and 'price' property.interview

type TItems = {
  quantity: number;
  price: number;
};
const items: TItems[] = [
  { quantity: 2, price: 10 },
  { quantity: 3, price: 15 },
  { quantity: 1, price: 25 },
  { quantity: 5, price: 8 },
];

const calculateTotalValue = (items: TItems[]): number => {
  return items.reduce((acc, item) => acc + item.price * item.quantity, 0);
};
const calculatedTotalValue = calculateTotalValue(items);
console.log(calculatedTotalValue); // output 130

// Task-13: Array Intersection
// Write a function that takes two arrays and returns a new array containing only the elements that appear in both arrays.

// Task-14: Object Transformation
// Create an array of objects representing customers with 'name', 'purchases', and 'loyaltyPoints' properties. Write a function to transform the array by doubling the 'loyaltyPoints' of customers with more than 5 purchases.

// Task-15: Function Memoization
// Implement a memoization function that caches the results of expensive function calls and returns the cached result when the same inputs occur again.
