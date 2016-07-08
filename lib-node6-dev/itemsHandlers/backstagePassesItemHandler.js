'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = handleBackstagePassesItem;

var _helper = require('./helper');

function handleBackstagePassesItem(item) {
    if (item.quality < 50) {
        item.quality++;
        if (item.sellIn < 11) {
            (0, _helper.increaseQuality)(item);
        }
        if (item.sellIn < 6) {
            (0, _helper.increaseQuality)(item);
        }
    }
    item.sellIn--;
    if (item.sellIn < 0) {
        item.quality = 0;
    }
}
//# sourceMappingURL=backstagePassesItemHandler.js.map