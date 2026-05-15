// Keyof : type operator

type RichPeopleVehicle = {
  car: string;
  bike: string;
  cng: string;
};
type myVehicle1 = "car" | "bike" | "cng";
type myVehicle2 = keyof RichPeopleVehicle;

const myVehicle: myVehicle2 = "car";

type User = {
  id: number;
  name: string;
  address: {
    city: string;
    upazila: string;
  };
};
const user: User = {
  id: 12,
  name: "Majed",
  address: {
    city: "Jamalpur",
    upazila: "Melandha",
  },
};

// const myId = user.id;
// const myId = user["id"];
// const myName = user["name"];
// const myAddess = user["address"];

// console.log({ myId, myName, myAddess });

const getPropertyFromObj = <X>(obj: X, key: keyof X) => {
  return obj[key];
};

// const result = getPropertyFromObj(user, "add");
// console.log(result);

const product = {
  brand: "HP",
};

const result1 = getPropertyFromObj(product, "brand");

console.log(result1);

const student = {
  id: 123,
  name: "Majed",
};

const result2 = getPropertyFromObj(student, "id");
console.log(result2);
