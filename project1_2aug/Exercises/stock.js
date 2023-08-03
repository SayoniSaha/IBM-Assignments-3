var Warehouse = /** @class */ (function () {
    function Warehouse() {
        this.slot = null;
    }
    Object.defineProperty(Warehouse.prototype, "stock", {
        get: function () {
            return this.slot;
        },
        set: function (item) {
            this.slot = item;
        },
        enumerable: false,
        configurable: true
    });
    Warehouse.prototype.addStock = function (item) {
        this.slot = item;
    };
    return Warehouse;
}());
var newstock = {
    id: 12,
    name: 'S1',
    quantity: 21
};
var warehouse = new Warehouse();
warehouse.stock = newstock;
var res = warehouse.stock;
console.log(res);
