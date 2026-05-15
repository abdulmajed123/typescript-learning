let anything: any;

anything = "MAJED123";

const re = anything as string;
console.log(re);

const kgToGMconverter = (
  input: string | number,
): string | number | undefined => {
  if (typeof input === "number") {
    return input * 1000;
  } else if (typeof input === "string") {
    const [value] = input.split(" ");
    return `Converted output is: ${Number(value) * 1000}`;
  } else {
    return undefined;
  }
};

const result1 = kgToGMconverter(4) as number;
console.log({ result1 });
const result2 = kgToGMconverter("100 tk") as string;

console.log({ result2 });
