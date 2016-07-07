"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.increaseQuality = increaseQuality;
exports.decreaseQuality = decreaseQuality;
function increaseQuality(item) {
    if (item.quality < 50) {
        item.quality++;
    }
}

function decreaseQuality(item) {
    if (item.quality > 0) {
        item.quality--;
    }
}
//# sourceMappingURL=helper.js.map