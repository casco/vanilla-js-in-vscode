let Quote = new Object();

Quote.items = [];

Quote.addItem = function (anItem) { 
    this.items.push(anItem);
}

Quote.getCost = function () {
    return this.items.reduce((sub,next) => {return sub + next.getCost()},0);
}

Quote.reset = function () {
    this.items = [];
}

module.exports = { Quote }