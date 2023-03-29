const { Item } = require('../models/Item');
const { Quote } = require('../models/Quote');

var cheapItem; 
var expensiveItem;
var quote;

beforeEach(() => {
    cheapItem = Object.create(Item);
    expensiveItem = Object.create(Item);
    quote = Object.create(Quote);  
    cheapItem.initialize("Something cheap",1,10);
    expensiveItem.initialize("Something expensive",1,100);
});

test('getCost', () => {

    // No items
    expect(quote.getCost()).toBe(0);

    //Just the one item
    quote.addItem(cheapItem);
    expect(quote.getCost()).toBe(10);

    //More than one (lower limit)
    quote.addItem(expensiveItem);
    expect(quote.getCost()).toBe(110);
});