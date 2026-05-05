// Function
// Arrow Function, Normal Function

function addNormal(num1: number, num2: number) {
  return num1 + num2;
}

addNormal(2, 4);

const addArrow = (num1: number, num2: number) => num1 + num2;
addArrow(3, 5);

// Object=> Function => Method

const poorUser = {
  name: "Majed",
  balance: 0,
  addBalance(value: number): number {
    const totalBalance = this.balance + value;
    return totalBalance;
  },
};

poorUser.addBalance(10000);

const arr: number[] = [1, 2, 3];

const sqrArray = arr.map((elem: number): number => elem * elem);
