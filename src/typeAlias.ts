type User = {
  id: number;
  name: {
    firstName: string;
    lastName: string;
  };
  gender: "male" | "female";
  contact: string;
  address: {
    division: string;
    city: string;
  };
};

const user1: User = {
  id: 12,
  name: {
    firstName: "Abdul",
    lastName: "Majed",
  },
  gender: "male",
  contact: "01893505618",
  address: {
    division: "Mymensngh",
    city: "Jamalpur",
  },
};

const user2: User = {
  id: 12,
  name: {
    firstName: "Abdul",
    lastName: "Majed",
  },
  gender: "male",
  contact: "01893505618",
  address: {
    division: "Mymensngh",
    city: "Jamalpur",
  },
};

// type alias use for function

type AddFunc = (num1: number, num2: number) => number;
const add: AddFunc = (num1, num2) => num1 + num2;
const num = add(20, 30);
console.log(num);
