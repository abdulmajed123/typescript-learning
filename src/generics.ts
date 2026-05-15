// Dynamically generaluze : Generic

type GenericArray<T> = Array<T>;

// const friends: string[] = ["Mr. X", "Mr. Y", "Mr. Z"];
const friends: GenericArray<string> = ["Mr. X", "Mr. Y", "Mr. Z"];

// const rollNumber: number[] = [1, 2, 3, 5, 6];
const rollNumber: GenericArray<number> = [1, 2, 3, 5, 6];

const isEliibleList: GenericArray<boolean> = [false, true, true, false];

const sqrFun = (value: number) => {
  return value * value;
};

const res = sqrFun(6);
console.log(res);

type Coordinates<X, Y> = [X, Y];

const coordinates1: Coordinates<number, number> = [20, 30];
const coordinates2: Coordinates<string, string> = ["20", "30"];

// Generic use for Object
type User = { name: string; age: number };
const userList: GenericArray<User> = [
  {
    name: "Mr. X",
    age: 20,
  },
  {
    name: "Mr. Y",
    age: 25,
  },
];
