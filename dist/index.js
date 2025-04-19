"use strict";
const customer = {
    name: "aginas",
    age: 21,
    email: "aginaspk6@gmail.com",
    address: {
        place: "Manjeri",
        post: "Manjeri",
    },
};
const customer1 = {
    name: "rinshad",
    age: 24,
    email: "aginaspk6@gmail.com",
};
const users = [customer, customer1];
let myName = "aginaspk";
const myName2 = "aginaspk";
let myName3 = "aginaspk";
const customer10 = {
    name: "aginaspk",
    password: "qwe123",
    role: "customer",
};
let userRole = "admin";
const getFoodDetatilss = (identifier) => {
    if (typeof identifier === "number") {
        return menu.find((item) => item.id === identifier);
    }
    else {
        return menu.find((item) => item.name.toLocaleLowerCase() === identifier.toLocaleLowerCase());
    }
};
let newUserIdd = 3;
const user = [
    { id: 1, name: "aginas", password: "12345678", role: "admin" },
    { id: 2, name: "rinshad", password: "12345678", role: "customer" },
    { id: 3, name: "minhaj", password: "12345678", role: "guest" },
];
const fetchUserDetails = (userName) => {
    const userDetail = user.find((item) => item.name === userName);
    if (!userDetail) {
        throw new Error("user not found");
    }
    return userDetail;
};
let phone = "7907412136";
phone = 7907412136;
phone = true;
const addNewUser = () => {
    user.push({ id: 2, name: "aginas", password: "12345678", role: "guest" });
};
const updateUser = (id, update) => {
    const updatingUser = user.find((item) => item.id === id);
    if (!updatingUser) {
        console.log("user not found");
        return;
    }
    Object.assign(updatingUser, update);
};
updateUser(1, { name: "aginaspkkkk" });
const addNewUsers = (newUser) => {
    let uuser = Object.assign(Object.assign({ id: newUserIdd++ }, newUser), { role: "admin" });
    user.push(uuser);
    return uuser;
};
addNewUsers({ name: "agi", password: "1234" });
//# sourceMappingURL=index.js.map