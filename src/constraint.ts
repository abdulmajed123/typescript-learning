// Constrain : strict role deowa

type Student = {
  id: number;
  name: string;
};
const addStudentToCourse = <T extends Student>(studentInfo: T) => {
  return { course: "Next Level", ...studentInfo };
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

const student3 = {
  id: 123,
  name: "Rakib",
  hasWtach: true,
};

const result1 = addStudentToCourse(student3);
console.log(result1);
