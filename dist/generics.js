"use strict";
const gameScore = [14, 21, 33, 42, 56];
const favoriteThings = ["Aot", "Coding", "Gaming", "Sleeping"];
const voters = [
    { name: "aginas", age: 22 },
    { name: "minhaj", age: 18 },
];
const getLastItem = (arr) => {
    return arr[arr.length - 1];
};
console.log(getLastItem(gameScore));
console.log(getLastItem(favoriteThings));
console.log(getLastItem(voters));
//# sourceMappingURL=generics.js.map