// ? : ternary operator: decision making
// ?? : nullish coalescing operator : null / undefined khetre kaj kore shudu
// ?. optioanl chaining

// ternary operator
const biyerJonnoEligible = (age: number) => {
  // if (age >= 21) {
  //   console.log("Biyer Jonno Eligible");
  // } else {
  //   console.log("Biyer Jonno Eligible na");
  // }

  const result =
    age >= 21
      ? "You are Eligible for Merried"
      : "You are not Eligible for Merried";
  console.log(result);
};

biyerJonnoEligible(23);

// nullish coalescing operator
const userTheme = " Green Theme";
const selecTheme = userTheme ?? "Light Theme";
console.log(selecTheme);

const isAuthenticated = "";

const resultWithTernary = isAuthenticated ? isAuthenticated : "you are guest";
const resultWithNullish = isAuthenticated ?? "you are guest";

console.log({ resultWithTernary }, { resultWithNullish });

// Optional Chaining
const user: {
  adreess: {
    city: string;
    town: string;
    postCode?: string;
  };
} = {
  adreess: {
    city: "Jamalpur",
    town: "Melandha",
  },
};

const postCode = user?.adreess?.postCode;
console.log(postCode);
