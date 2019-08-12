export const join = (req, res) => res.render("join", { pageTitle: "Join" });
export const login = (req, res) => res.render("login", { pageTitle: "Login" });
export const logout = (req, res) => res.render("logout", { pageTitle: "Logout" });
export const users = (req, res) => res.render("users", { pageTitle: "Users" });
export const userDetail = (req, res) => res.render("user Detail", { pageTitle: "userDetail" });
export const editProfile = (req, res) => res.render("edit Porfile", { pageTitle: "editProfile" });
export const changePassword = (req, res) =>
  res.render("change Password", { pageTitle: "changePassword" });
