// Destuctuing 2 vabe kora jai
// 1 Object Destucturing
// 2 Array Destucturing

// Object Destucturing
const user = {
  id: 120,
  name: {
    firstName: "Md",
    middleName: "Abdul",
    lastName: "Majed",
  },
  gender: "male",
  favouriteColor: "Black",
};

// const myFavouriteColor = user.favouriteColor;
// const myMiddleName = user.name.middleName;

// console.log(myFavouriteColor, myMiddleName);

const {
  favouriteColor: myFavouriteColor,
  name: { middleName: myMiddleName, lastName },
} = user;
console.log(myFavouriteColor, myMiddleName, lastName);

// Array Destructuring
const friends = ["Maidul", "Mamunur", "Sadik", "Ranju"];
// const myBestFriend = friends[0];
// console.log(myBestFriend);

const [, , myBestFriend] = friends;
console.log(myBestFriend);
