// This is just an usage example for the clases Quote and Item

const { Quote } = require("./models/Quote");
const { Item } = require("./models/Item");

let quote = Object.create(Quote);

let item = Object.create(Item);
item.initialize("Tomato", 10, 1);

quote.addItem(item);

console.log(Quote.getCost());