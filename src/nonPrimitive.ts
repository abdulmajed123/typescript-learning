// Array, Object

// TS Tuple data type

// TS Array data type
let bazarList: string[] = ["EGG", "VEGETABLES", "MILK", "SUGAR"];
bazarList.push(12);
console.log(bazarList);

let mixedArray: (string | number)[] = ["EGG", 10, "milk", 2];
mixedArray.push(20);
mixedArray.push(true);

// TS Tuple Data Type

let coordinates: [number, number] = [20, 30];
let coordinatess: [number, number] = [20, 30, 60];

let cuple: [string, string] = ["Husband", "Wife"];

let majedNameAndRoll: [string, number] = ["Majed", 4];
majedNameAndRoll[0] = "majed";

let destination: [string, string, number] = ["Jamalpur", "Dhaka", 5];

// reference type: Object

// let user: {
//   organization: "Progamming Hero"; //value => type: literal types
//   firstName: string;
//   middleName?: string; // optional type
//   lastName: string;
//   isMarried: boolean;
// } = {
//   organization: "Progamming Hero",
//   firstName: "Md",
//   // middleName: "Abdul",
//   lastName: "Majed",
//   isMarried: true,
// };

// user.organization = "PROGAMMING HERO FIRE";
let user: {
  readonly organization: "Progamming Hero"; // access modifier
  firstName: string;
  middleName?: string; // optional type
  lastName: string;
  isMarried: boolean;
} = {
  organization: "Progamming Hero",
  firstName: "Md",
  // middleName: "Abdul",
  lastName: "Majed",
  isMarried: true,
};

console.log(user);
