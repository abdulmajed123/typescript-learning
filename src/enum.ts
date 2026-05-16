// Enum

// set of fixed string literal ar jaigai rakhe

// type userRoles = "admin" | "editor" | "viewer";

enum userRoles {
  Admin = "Admin",
  Editor = "Editor",
  Viewer = "Viewer",
}

const canEdit = (role: userRoles) => {
  if (role === userRoles.Admin || role === "Editor") {
    return true;
  } else {
    return false;
  }
};

const isPermissable = canEdit(userRoles.Admin);
console.log(isPermissable);
