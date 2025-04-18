"use strict";
let cashinRegister = 100;
let nextMenuId = 1;
let nextOrderId = 1;
const menu = [
    { id: nextMenuId++, name: "biriyani", price: 8 },
    { id: nextMenuId++, name: "friedrice", price: 7 },
    { id: nextMenuId++, name: "noodles", price: 4 },
    { id: nextMenuId++, name: "mandhi", price: 10 },
];
const orderQueue = [];
const getFoodDetatils = (identifier) => {
    if (typeof identifier === "number") {
        return menu.find((item) => item.id === identifier);
    }
    else if (typeof identifier === "string") {
        return menu.find((item) => item.name.toLocaleLowerCase() === identifier.toLocaleLowerCase());
    }
    else {
        throw new TypeError("Parameter 'identifier' must be number or string");
    }
};
const addItemToMenu = (item) => {
    menu.push(item);
};
const placeOrder = (OrderItem) => {
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
const completeOrder = (orderId) => {
    const order = orderQueue.find((item) => item.id === orderId);
    if (!order) {
        console.error(`No order found on this Id ${orderId}`);
        return;
    }
    order.status = "completed";
    return order;
};
addItemToMenu({ id: nextMenuId++, name: "chicken chilli", price: 12 });
addItemToMenu({ id: nextMenuId++, name: "chicken kondattam", price: 10 });
addItemToMenu({ id: nextMenuId++, name: "chicken pollichath", price: 15 });
placeOrder("biriyani");
completeOrder(1);
console.log(menu);
console.log(cashinRegister);
console.log(orderQueue);
//# sourceMappingURL=shop.js.map