//add watch command  tsc test.ts -w

//run nodemon --exec "tsc" src/index.js  => ця команда дозволяє вам вести розробку TypeScript додатку, при цьому автоматично компілюючи код та перезапускаючи додаток при необхідності

const user: { name: string; age: number } = {
  name: "alex",
  age: 31,
};

type User = {
  name: string;
  age: number;
};

const newUser: User = {
  name: "alex2",
  age: 31,
};

let arr: string[];
arr = ["1", "2"];

let arrNum: number[];

arrNum = [1, 2];

let numbers: Array<number> = [1, 2];
let strings: Array<string> = ["1", "2"];

type Car = {
  name: string;
  speed: number;
};

let newCars: Car[] = [
  { name: "bmw", speed: 50 },
  { name: "audi", speed: 40 },
];

type User2 = {
  name: string;
  age: number;
};

type eventType = "lesson " | "deadLine";

const event2: eventType = "deadLine";

enum Sizes {
  smal = "smal",
  medium = "medium",
  large = "large",
}

const button2: Sizes = Sizes.large;

type User3 = {
  name: string;
  age: number;
  hobby: string;
};
function userConstructor(name: string, age: number, hobby: string): User3 {
  return {
    name,
    age,
    hobby,
  };
}

type Cars = {
  color: string;
  price: number;
  currency: string;
  start: () => void;
};

const Car: Cars = {
  color: "red",
  price: 1000,
  currency: "UAH",
  start() {
    console.log("start");
  },
};

type Goods = {
  [key: string]: number | string;
};

const banana: Goods = {
  banana: "45",
};

function identify<T>(params: T): T {
  return params;
}

let output1 = identify<string>("myString");
let output2 = identify<number>(10);

function reverse<T>(params: T[]): T[] {
  return params.reverse();
}

const arrRev1 = reverse<string>(["1", "2"]);
// console.log(arrRev1); // ['2','1']
const arrREv2 = reverse<number>([4, 5]);
// console.log(arrREv2); // [5,4]

type Todo = {
  title: string;
  description?: string;
  completed: boolean;
};

function updateTodo(todo: Todo, filsedUpdate: Partial<Todo>): Todo {
  return { ...todo, ...filsedUpdate };
}

const todo1: Todo = {
  title: "Clean the kitchen",
  description: "Clean all dishes and floors",
  completed: false,
};

const update1 = updateTodo(todo1, { completed: true });

function greeting() {
  return "Hello world";
}

type Greeting = ReturnType<typeof greeting>; // string

function multiply(a: number, b: number) {
  return a * b;
}
