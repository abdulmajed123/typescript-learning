// Spread Operator

// Spread Operator for Array
const friends = ["Nurnabi", "Rofikul", "Jakiul"];
const schoolFriends = ["Maidul", "Ranju", "Sadik", "Rashedul"];
const collegeFriends = ["Jiaul", "Sujon"];

friends.push(...schoolFriends);
friends.push(...collegeFriends);
console.log(friends);

// Spread Operator for Object

const user = { name: "Majed", phone: "01893505628" };
const otherInfo = { hobby: "Coding", favouriteCol: "Black" };

const userInfo = { ...user, ...otherInfo };
console.log("User:", userInfo);

// Rest Oparator

const sendInvite = (friends1: string, friends2: string, friends3: string) => {
  console.log(`Send Invitation to ${friends1}`);
  console.log(`Send Invitation to ${friends2}`);
  console.log(`Send Invitation to ${friends3}`);
};

sendInvite("maidul", "sadik", "ranju");

const sendInvites = (...friends: string[]) => {
  friends.forEach((friend: string) =>
    console.log(`Send Invitation to ${friend}`),
  );
};

sendInvites("Robiul", "Mustak", "Nurnabi", "Mamun", "Heloo");
