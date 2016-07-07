"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = handleBackstagePassesItem;
function handleBackstagePassesItem(item) {
    if (item.quality < 50) {
        item.quality++;
        if (item.sellIn < 11) {
            if (item.quality < 50) {
                item.quality++;
            }
        }
        if (item.sellIn < 6) {
            if (item.quality < 50) {
                item.quality++;
            }
        }
    }
    item.sellIn--;
    if (item.sellIn < 0) {
        item.quality = item.quality - item.quality;
    }
}
//# sourceMappingURL=backstagePassesItemHandler.js.map