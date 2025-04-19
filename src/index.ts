type Address = {
  place: string;
  post: string;
};

type Person = {
  name: string;
  age: number;
  email: string;
  address?: Address;
};

const customer: Person = {
  name: "aginas",
  age: 21,
  email: "aginaspk6@gmail.com",
  address: {
    place: "Manjeri",
    post: "Manjeri",
  },
};
const customer1: Person = {
  name: "rinshad",
  age: 24,
  email: "aginaspk6@gmail.com",
};

const users: Array<Person> = [customer, customer1];

// Literal Type
// Usage : in unions
let myName = "aginaspk";
const myName2 = "aginaspk"; // literal type
let myName3: "aginaspk" = "aginaspk"; // literal type syntax

// Union
type User = {
  name: string;
  password: string;
  role: "guest" | "customer" | "admin"; //Union use "|" pipes
};

const customer10: User = {
  name: "aginaspk",
  password: "qwe123",
  role: "customer",
};

type Role = "guest" | "customer" | "admin"; //Union use "|" pipes
let userRole: Role = "admin";

// Type Narrowing
const getFoodDetatilss = (identifier: number | string) => {
  if (typeof identifier === "number") {
    return menu.find((item) => item.id === identifier);
  } else {
    return menu.find(
      (item) => item.name.toLocaleLowerCase() === identifier.toLocaleLowerCase()
      // (item) => item.id == identifier --> Error because Type Narrowing
    );
  }
};

type Userr = {
  id: number;
  name: string;
  password: string;
  role: Role;
};
let newUserIdd = 3;
// Function return type
const user: Userr[] = [
  { id: 1, name: "aginas", password: "12345678", role: "admin" },
  { id: 2, name: "rinshad", password: "12345678", role: "customer" },
  { id: 3, name: "minhaj", password: "12345678", role: "guest" },
];

const fetchUserDetails = (userName: string): User => {
  const userDetail = user.find((item) => item.name === userName);
  if (!userDetail) {
    throw new Error("user not found");
  }
  return userDetail;
};

//any but dont use this 😅
let phone: any = "7907412136";
phone = 7907412136; // now we can assign any type for eg --> number
phone = true; // for eg --> boolean

//void
const addNewUser = (): void => {
  user.push({ id: 2, name: "aginas", password: "12345678", role: "guest" });
}; // return type is void because it return nothing

//built in Utilty fn
type Update = Partial<Userr>; // partial utility its liek optional
const updateUser = (id: number, update: Update) => {
  const updatingUser = user.find((item) => item.id === id);
  if (!updatingUser) {
    console.log("user not found");
    return;
  }
  Object.assign(updatingUser, update);
};

updateUser(1, { name: "aginaspkkkk" });

//omit utility
const addNewUsers = (newUser: Omit<Userr,"id" | "role">): Userr => {
  let uuser: Userr = { id: newUserIdd++,...newUser,role:"admin" };
  user.push(uuser);
  return uuser;
};//Omit omit data type from type

addNewUsers({name:"agi",password:"1234"})

