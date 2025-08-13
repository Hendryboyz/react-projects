// Primitives types
let age: number = 10;
age = 12;

let name: string;
name = 'Henry';

let isMale: boolean;
isMale = true;

// Complex type
let hobbies: string[] = ['Sports', 'Cooking'];
hobbies.push('Reading');

// this is "Type Aliases"
type Person = {
  name: string;
  age: number;
};

let person: Person = {
  name: 'Henry',
  age: 30,
};

let people: Person[] = [];


// type inference feature from Typescript deny this assignment
let course = 'React course';
// this is not allowed
// course = 12345;

// union type multiple types
let dynamicCourse: string | number;
dynamicCourse = 'Good React course';
dynamicCourse = 12345;

// function type alias
let addFunction: (a: number, b: number) => number;
addFunction = function add(a: number, b: number): number {
  return a + b;
}

// `void` means never return
function printOutput(value: any): void {
  console.log(value);
}

// Generics feature
function insertAtFirst<T>(array: T[], val: T): T[] {
  return [val, ...array];
}

const demoArray = [1, 2, 3, 4, 5];
const updatedArray = insertAtFirst<number>(demoArray, -1);
const stringArray = insertAtFirst(['a', 'b', 'c'], 'd')
if (stringArray.length > 0 && stringArray[0]) {
  const aString = stringArray[0].split(',')
}
