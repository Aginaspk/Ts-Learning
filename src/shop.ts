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
let cashinRegister = 100;
let nextMenuId = 1;
let nextOrderId = 1;

const menu = [
  { id: nextMenuId++, name: "biriyani", price: 8 },
  { id: nextMenuId++, name: "friedrice", price: 7 },
  { id: nextMenuId++, name: "noodles", price: 4 },
  { id: nextMenuId++, name: "mandhi", price: 10 },
];

const orderQueue: Order[] = [];

const getFoodDetatils = (identifier: number | string): Dish | undefined => {
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

const addItemToMenu = (item: Omit<Dish, "id">): Dish => {
  let newItem = { id: nextMenuId++, ...item };
  menu.push(newItem);
  return newItem;
};

const placeOrder = (OrderItem: string): Order | undefined => {
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

const completeOrder = (orderId: number): Order | undefined => {
  const order = orderQueue.find((item) => item.id === orderId);
  if (!order) {
    console.error(`No order found on this Id ${orderId}`);
    return;
  }
  order.status = "completed";
  return order;
};

const addToArray = <Type>(array: Type[], item: Type): Type[] => {
  array.push(item);
  return array;
};

addToArray<Dish>(menu, { id: nextMenuId++, name: "chicken chilli", price: 12 });
addToArray<Order>(orderQueue, {
  id: nextOrderId++,
  food: menu[2],
  status: "completed",
});

// addItemToMenu({ name: "chicken chilli", price: 12 });
// addItemToMenu({ name: "chicken kondattam", price: 10 });
// addItemToMenu({ name: "chicken pollichath", price: 15 });

placeOrder("biriyani");
placeOrder("chicken pollichath");
completeOrder(1);
completeOrder(2);

console.log(menu);
console.log(cashinRegister);
console.log(orderQueue);
