// Union |

type UserRole = "admin" | "user";
const getUserDashbaord = (role: UserRole) => {
  if (role === "admin") {
    return "Admin Dashboard";
  } else if (role === "user") {
    return "User Dashboard";
  } else {
    return "Guest Dashboard";
  }
};

getUserDashbaord("guest");

// Intersection &

type Employee = {
  id: number;
  name: string;
  phoneNo: string;
};

type Manager = {
  designation: string;
  teamSize: number;
};

type EmploeeAndManager = Employee & Manager;

const AbdulMajed: EmploeeAndManager = {
  id: 12,
  name: "Abdul Majed",
  phoneNo: "01893505618",
  designation: "Manager",
  teamSize: 10,
};
