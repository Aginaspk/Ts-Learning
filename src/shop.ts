type Dish = {
  id: number;
  name: string;
  price: number;
};

type Order = {
  id: number;
  food: Dish;
  status: "ordered" | "completed";
};

const menu = [
  { id: 1, name: "biriyani", price: 8 },
  { id: 2, name: "friedrice", price: 7 },
  { id: 3, name: "noodles", price: 4 },
  { id: 4, name: "mandhi", price: 10 },
];

let cashinRegister = 100;
const orderQueue: Order[] = [];
let nextOrderId = 1;

const getFoodDetatils = (identifier: number | string) => {
  if (typeof identifier === "number") {
    return menu.find((item) => item.id === identifier);
  } else if (typeof identifier === "string") {
    return menu.find(
      (item) => item.name.toLocaleLowerCase() === identifier.toLocaleLowerCase()
    );
  } else {
    throw new TypeError("Parameter 'identifier' must be number or string");
  }
};

const addItemToMenu = (item: Dish) => {
  menu.push(item);
};

const placeOrder = (OrderItem: string) => {
  const item = menu.find((i) => i.name === OrderItem);
  if (!item) {
    console.error(`${OrderItem} not available`);
    return;
  }
  cashinRegister += item.price;
  const order: Order = { id: nextOrderId++, food: item, status: "ordered" };
  orderQueue.push(order);
  return order;
};

const completeOrder = (orderId: number) => {
  const order = orderQueue.find((item) => item.id === orderId);
  if (!order) {
    console.error(`No order found on this Id ${orderId}`);
    return;
  }
  order.status = "completed";
  return order;
};

addItemToMenu({ id: 5, name: "chicken chilli", price: 12 });
addItemToMenu({ id: 6, name: "chicken kondattam", price: 10 });
addItemToMenu({ id: 7, name: "chicken pollichath", price: 15 });

placeOrder("biriyani");
completeOrder(1);

console.log(menu);
console.log(cashinRegister);
console.log(orderQueue);
