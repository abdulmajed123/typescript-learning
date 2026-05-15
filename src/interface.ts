type User = {
  name: string;
  age: number;
};

// Interface : Object type: array, object, function

interface Iuser {
  name: string;
  age: number;
}

type Role = {
  role: "admin" | "manager";
};

type UserWithManager = User & Role;

interface IuserWithRole extends Iuser {
  role: "admin" | "manager";
}

const user1: IuserWithRole = {
  name: "Majed",
  age: 23,
  role: "admin",
};

const user2: Iuser = {
  name: "Hello",
  age: 20,
};

type IsAdmin = boolean;
const isAdmin: IsAdmin = false;

// Function
type Add = (num1: number, num2: number) => number;

interface IAdd {
  (num1: number, num2: number): number;
}
const add: IAdd = (num1, num2) => num1 + num2;
const res = add(3, 7);
console.log(res);

// Array
type Friends = string[];
const friends: Friends = ["a", "b", "c"];

interface IFriends {
  [index: number]: string;
}

const friends1: Friends = ["A", "B", "C"];
