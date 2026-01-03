function isAdmin(user) {
  return user.role === "admin" || user.role === "user";
}

console.log(isAdmin({ role: "user" }));

