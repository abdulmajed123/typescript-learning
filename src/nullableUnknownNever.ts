// Nullable Type

const getUser = (input: string | null) => {
  if (input) {
    console.log(` From DB: ${input}`);
  } else {
    console.log(`From DB: ALL USER`);
  }
};

getUser("Hello");

// Unknown Type

const discountCalculator = (input: unknown) => {
  if (typeof input === "number") {
    const discountPrice = input * 0.1;
    console.log(discountPrice);
  } else if (typeof input === "string") {
    const [discountedPrice] = input.split(" ");
    console.log(Number(discountedPrice) * 0.1);
  } else {
    console.log("Wrong input");
  }
};

discountCalculator(100);
discountCalculator("100 k");
discountCalculator(null);

// Never / Void

const throwError = (msg: string): never => {
  throw new Error(msg);
};
throwError("Error...");
