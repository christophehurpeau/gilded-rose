'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = handleAgedBrieItem;

var _helper = require('./helper');

function handleAgedBrieItem(item) {
    (0, _helper.increaseQuality)(item);
    item.sellIn--;
    if (item.sellIn < 0) {
        (0, _helper.increaseQuality)(item);
    }
}
//# sourceMappingURL=agedBrieItemHandler.js.map