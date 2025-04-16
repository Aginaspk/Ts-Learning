type Dish = {
  name: string;
  price: number;
};

type Order = {
  id: number;
  food: Dish;
  status: string;
};

const menu = [
  { name: "biriyani", price: 8 },
  { name: "friedrice", price: 7 },
  { name: "noodles", price: 4 },
  { name: "mandhi", price: 10 },
];

let cashinRegister = 100;
const orderQueue: Order[] = [];
let nextOrderId = 1;

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
  const order = { id: nextOrderId++, food: item, status: "ordered" };
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

addItemToMenu({ name: "chicken chilli", price: 12 });
addItemToMenu({ name: "chicken kondattam", price: 10 });
addItemToMenu({ name: "chicken pollichath", price: 15 });

placeOrder("biriyani");
completeOrder(1);

console.log(menu);
console.log(cashinRegister);
console.log(orderQueue);
