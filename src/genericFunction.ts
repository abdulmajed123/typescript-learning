// Generic Function

// const createArrayWithString = (value: string) => [value];
// const createArrayWithNumber = (value: number) => [value];
// const createArrayWithuserObj = (value: { id: number; name: string }) => [value];

const createArrayWithGeneric = <T>(value: T) => {
  return [value];
};

const arrString = createArrayWithGeneric("Majed");
const arrNumber = createArrayWithGeneric(20);
const arraObj = createArrayWithGeneric({ id: 2, name: "Mr. X" });
console.log(arrNumber, arrString, arraObj);

// Tuple

const createArrayTuple = (params1: string, params2: string) => [
  params1,
  params2,
];

const createArrayTupleWithGeneric = <X, Y>(params1: X, params2: Y) => {
  return [params1, params2];
};

const res1 = createArrayTupleWithGeneric("Majed", true);
const res2 = createArrayTupleWithGeneric({ id: 12, name: "Mr. X" }, 12);
console.log(res1, res2);

const addStudentToCourse = <T>(studentInfo: T) => {
  return { course: "Next Level", ...student1 };
};

const student1 = {
  id: 123,
  name: "Majed",
  hasPen: true,
};

const student2 = {
  id: 1234,
  name: "Jhankar Mahbub",
  hasCar: true,
  isMerried: true,
};

const result1 = addStudentToCourse(student1);
console.log(result1);
