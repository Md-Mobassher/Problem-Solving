/* Task-11: Advanced Sorting
Create an array of objects representing students with 'name' and 'grades' properties. Write a function to sort the students by average grade in descending order. */

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

/* Task-12: Functional Programming - Reduce
Write a function that uses the reduce function to calculate the total value of an array of objects with a 'quantity' and 'price' property.interview */

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

/* Task-13: Array Intersection
Write a function that takes two arrays and returns a new array containing only the elements that appear in both arrays. */

const arrayIntersection = (arr1: any[], arr2: any[]) => {
  const set2 = new Set(arr2);
  return arr1.filter((item) => set2.has(item));
};

const array1 = [1, 2, 3, 4, 5];
const array2 = [4, 5, 6, 7, 8];

const intersection = arrayIntersection(array1, array2);

console.log("Array Intersection:", intersection);

/* Task-14: Object Transformation
Create an array of objects representing customers with 'name', 'purchases', and 'loyaltyPoints' properties. Write a function to transform the array by doubling the 'loyaltyPoints' of customers with more than 5 purchases. */

type TCustomer = {
  name: string;
  purchases: number;
  loyaltyPoints: number;
};

const customers: TCustomer[] = [
  { name: "John Doe", purchases: 3, loyaltyPoints: 10 },
  { name: "Jane Smith", purchases: 5, loyaltyPoints: 20 },
  { name: "Alice Johnson", purchases: 2, loyaltyPoints: 5 },
  { name: "Alice Johnson", purchases: 6, loyaltyPoints: 5 },
];

const transformCustomers = (customers: TCustomer[]): TCustomer[] => {
  return customers.map((customer: TCustomer) => {
    return {
      ...customer,
      loyaltyPoints:
        customer.purchases >= 5
          ? customer.loyaltyPoints * 2
          : customer.loyaltyPoints,
    };
  });
};

const transformedCustomers = transformCustomers(customers);
console.log(transformedCustomers);
// output [
//   { name: 'John Doe', purchases: 3, loyaltyPoints: 10 },
//   { name: 'Jane Smith', purchases: 5, loyaltyPoints: 40 },
//   { name: 'Alice Johnson', purchases: 2, loyaltyPoints: 5 },
//   { name: 'Alice Johnson', purchases: 6, loyaltyPoints: 10 }
// ]

/* Task-15: Function Memoization
Implement a memoization function that caches the results of expensive function calls and returns the cached result when the same inputs occur again. */

function memoize(fn: (...args: any[]) => any) {
  const cache: Record<string, any> = {};

  return function (...args: any[]) {
    const key = JSON.stringify(args); // Use arguments as cache key
    if (cache[key]) {
      console.log("Returning from cache for:", key);
      return cache[key];
    } else {
      console.log("Computing result for:", key);
      const result = fn(...args); // Call the actual function
      cache[key] = result; // Store result in cache
      return result;
    }
  };
}

function factorial(n: number): number {
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}

// Memoized factorial function
const memoizedFactorial = memoize(factorial);

// Test the memoization
console.log(memoizedFactorial(5)); // Computes and caches result
console.log(memoizedFactorial(5)); // Returns cached result
console.log(memoizedFactorial(6)); // Computes for 6, caches it
