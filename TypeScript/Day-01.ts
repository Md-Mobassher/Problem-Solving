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
  { name: "Ashrafi", age: 22, gender: "female" },
  { name: "Rashed", age: 26, gender: "male" },
];

const filterAndMapMales = (persons: TPerson[]): string[] =>
  persons
    .filter((person: TPerson) => person.gender !== "female")
    .map((person) => person.name);

const filterdPerson = filterAndMapMales(persons);
// console.log(filterdPerson);

// Task-02: Object Manipulation
// Create an array of objects representing books with properties like title, author, and year. Write a function that takes the array and returns a new array with only the book titles. Print the result.

type TBook = {
  title: string;
  author: string;
  year: number;
};

const books: TBook[] = [
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960,
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
  },
  {
    title: "Moby Dick",
    author: "Herman Melville",
    year: 1851,
  },
];

const bookTitles = (books: TBook[]) => books.map((book: TBook) => book.title);

const allBookTitle = bookTitles(books);
// console.log(allBookTitle);

// Task-03: Function Composition
// Write three functions: one to square a number, one to double a number, and one to add 5 to a number. Compose these functions to create a new function that squares a number, doubles the result, and then adds 5.
const squareANumber = (a: number) => a * a;

const doubleANumber = (a: number) => a + a;

const addFiveToANumber = (a: number) => a + 5;

const squareDoubleAddFive = (a: number) =>
  addFiveToANumber(doubleANumber(squareANumber(a)));

const result = squareDoubleAddFive(5);
// console.log(result);

// Task-04: Sorting Objects
// Create an array of objects representing cars with properties like make, model, and year. Write a function to sort the array of cars by the year of manufacture in ascending order. Print the sorted array.
type TCar = {
  make: string;
  model: string;
  year: number;
};

const cars: TCar[] = [
  { make: "Toyota", model: "Camry", year: 2020 },
  { make: "Honda", model: "Accord", year: 2018 },
  { make: "Ford", model: "Mustang", year: 2021 },
  { make: "Tesla", model: "Model 3", year: 2022 },
  { make: "Chevrolet", model: "Malibu", year: 2019 },
  { make: "BMW", model: "X5", year: 2023 },
  { make: "Audi", model: "A4", year: 2020 },
];

const sortCarByYear = (cars: TCar[]) => cars.sort((a, b) => a.year - b.year);

const sortedCars = sortCarByYear(cars);
// console.log(sortedCars);

// Task-05: Find and Modify
// Write a function that searches an array of objects for a specific person by name. If found, modify their age property. Print the updated array.

const updateAge = (persons: TPerson[], name: string, newAge: number) =>
  persons.map((person) =>
    person.name === name ? { ...person, age: newAge } : person
  );

const updatedAge = updateAge(persons, "Ashrafi", 23);
// console.log(updatedAge);
