Item = new Object();

Item.initialize = function (description, quantity, unitCost ) {
    this.description = description;
    this.quantity = quantity;
    this.unitCost = unitCost;
}

Item.getCost = function() {
    return this.unitCost * this.quantity;
}

module.exports = { Item }