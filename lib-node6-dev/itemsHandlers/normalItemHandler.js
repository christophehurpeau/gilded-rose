"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = handleNormalItem;
function handleNormalItem(item) {
    if (item.quality > 0) {
        item.quality--;
    }
    item.sellIn--;
    if (item.sellIn < 0) {
        if (item.quality > 0) {
            item.quality--;
        }
    }
}
//# sourceMappingURL=normalItemHandler.js.map