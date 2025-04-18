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


