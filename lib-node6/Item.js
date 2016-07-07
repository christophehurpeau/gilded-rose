"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
class Item {

    constructor(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }

    // eslint-disable-next-line camelcase
    get sell_in() {
        return this.sellIn;
    }
}
exports.default = Item;
//# sourceMappingURL=Item.js.map