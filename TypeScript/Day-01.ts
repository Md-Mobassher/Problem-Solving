// 17 September 2024

// Task-01: Array Filtering and Mapping
// Create an array of objects, each representing a person with properties like name, age, and gender. Write a function to filter out all females and then map the remaining people to an array of names. Print the final result.

type TPerson = {
  name: string;
  age: number;
  gender: "male" | "female";
};

const persons: TPerson[] = [
  { name: "Md Mobassher", age: 26, gender: "male" },
  { name: "Raiyan", age: 2, gender: "male" },
  { name: "Asharafi", age: 22, gender: "female" },
  { name: "Md Mobassher", age: 26, gender: "male" },
];

const filterAndMapMales = (persons: TPerson[]): string[] => {
  return persons
    .filter((person: TPerson) => person.gender !== "female")
    .map((person) => person.name);
};

const filterdPerson = filterAndMapMales(persons);
console.log(filterdPerson);

// Task-02: Object Manipulation
// Create an array of objects representing books with properties like title, author, and year. Write a function that takes the array and returns a new array with only the book titles. Print the result.

// Task-03: Function Composition
// Write three functions: one to square a number, one to double a number, and one to add 5 to a number. Compose these functions to create a new function that squares a number, doubles the result, and then adds 5.

// Task-04: Sorting Objects
// Create an array of objects representing cars with properties like make, model, and year. Write a function to sort the array of cars by the year of manufacture in ascending order. Print the sorted array.

// Task-05: Find and Modify
// Write a function that searches an array of objects for a specific person by name. If found, modify their age property. Print the updated array.
