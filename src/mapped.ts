// mapped types

// map

const arryOfNum: number[] = [1, 2, 3, 4, 5];
const arraOfString: string[] = ["1", "2", "3", "4"];

const arrayOfStringUsingMap: string[] = arryOfNum.map((num) => num.toString());

console.log(arrayOfStringUsingMap);

type AreaOfNum = {
  height: number;
  width: number;
};

type Height = AreaOfNum["height"];

// type AreaOfString = {
//   height: string;
//   width: string;
// };

type AreaOfString = {
  [key in "height" | "width"]: string;
};
type AreaOfBool = {
  [key in keyof AreaOfNum]: boolean;
};
type Area<T> = {
  [key in keyof T]: T[key];
};

const area1: Area<{ height: string; width: boolean }> = {
  height: "30",
  width: true,
};
