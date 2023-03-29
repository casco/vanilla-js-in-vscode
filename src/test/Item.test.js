const { Item } = require('../models/Item');

test('getCost', () => {

    // Zero queantity
    let item = Object.create(Item);
    item.initialize("Something",0,10);
    expect(item.getCost()).toBe(0);

    //Just one
    item.initialize("Something",1,10);
    expect(item.getCost()).toBe(10);

    //More than one (lower limit)
    item.initialize("Something",2,10);
    expect(item.getCost()).toBe(20);

});