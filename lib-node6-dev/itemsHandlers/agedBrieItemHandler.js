"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = handleAgedBrieItem;
function handleAgedBrieItem(item) {
    if (item.quality < 50) {
        item.quality = item.quality + 1;
    }
    item.sellIn--;
    if (item.sellIn < 0) {
        if (item.quality < 50) {
            item.quality++;
        }
    }
}
//# sourceMappingURL=agedBrieItemHandler.js.map