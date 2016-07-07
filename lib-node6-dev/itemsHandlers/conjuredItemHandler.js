'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = handleConjuredItem;

var _helper = require('./helper');

function handleConjuredItem(item) {
    (0, _helper.decreaseQuality)(item);
    (0, _helper.decreaseQuality)(item);
    item.sellIn--;

    if (item.sellIn < 0) {
        (0, _helper.decreaseQuality)(item);
    }
}
//# sourceMappingURL=conjuredItemHandler.js.map