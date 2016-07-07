'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = handleNormalItem;

var _helper = require('./helper');

function handleNormalItem(item) {
    (0, _helper.decreaseQuality)(item);
    item.sellIn--;

    if (item.sellIn < 0) {
        (0, _helper.decreaseQuality)(item);
    }
}
//# sourceMappingURL=normalItemHandler.js.map