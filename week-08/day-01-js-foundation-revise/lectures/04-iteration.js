let salesData = [
  { product: "Laptop", price: 1200 },
  { product: "Smartphone", price: 800 },
  { product: "Headphones", price: 150 },
  { product: "Keyboard", price: 80 },
];

let initialValue = 0;
let totalSales = salesData.reduce((acc, sale) => acc + sale.price, 0);
console.log(totalSales);

// list all the items that are less than 50
let inventory = [
  { name: "Widget A", stock: 30 },
  { name: "Widget B", stock: 120 },
  { name: "Widget C", stock: 45 },
  { name: "Widget D", stock: 70 },
];
let lowStockItems = inventory.filter((item) => {
  return item.stock < 50;
});
console.log(lowStockItems); // [ { name: 'Widget A', stock: 30 }, { name: 'Widget C', stock: 45 } ]

let inventory0 = [
  { name: "Widget A", stock: 30 },
  { name: "Widget B", stock: 120 },
  { name: "Widget C", stock: 45 },
  { name: "Widget D", stock: 70 },
];
let lowStockItems0 = inventory0.filter((item) => {
  item.stock < 50;
});
console.log(lowStockItems0); // []

let inventory1 = [
  { name: "Widget A", stock: 30 },
  { name: "Widget B", stock: 120 },
  { name: "Widget C", stock: 45 },
  { name: "Widget D", stock: 70 },
];
let lowStockItems1 = inventory1.filter((item) => {
  return item.stock < 50;
});
console.log(lowStockItems1); // [ { name: 'Widget A', stock: 30 }, { name: 'Widget C', stock: 45 } ]

// find most active user from the following using reduce method
let userActivity = [
  { user: "Alice", activityCount: 45 },
  { user: "Bob", activityCount: 72 },
  { user: "Charlie", activityCount: 33 },
  { user: "Sam", activityCount: 83 },
];
let mostActiveUser = userActivity.reduce((maxUser, user) =>
  user.activityCount > maxUser.activityCount ? user : maxUser
);
console.log(mostActiveUser);
