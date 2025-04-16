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
