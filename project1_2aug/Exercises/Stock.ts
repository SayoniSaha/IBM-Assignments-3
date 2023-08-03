interface Stock {
    id: number;
    name: string;
    quantity: number;
}

class Warehouse {
    private slot: Stock | null;

    constructor() {
        this.slot = null;
    }

    get stock(): Stock | null {
        return this.slot;
    }

    set stock(item: Stock | null) {
        this.slot = item;
    }

    addStock(item: Stock) {
        this.slot = item;
    }
}

const newstock: Stock = {
    id: 12,
    name: 'S1',
    quantity: 21
};

const warehouse = new Warehouse();
warehouse.stock = newstock;
const res = warehouse.stock;

console.log(res);
