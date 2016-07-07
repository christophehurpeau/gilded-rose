'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = getHandler;

var _agedBrieItemHandler = require('./agedBrieItemHandler');

var _agedBrieItemHandler2 = _interopRequireDefault(_agedBrieItemHandler);

var _backstagePassesItemHandler = require('./backstagePassesItemHandler');

var _backstagePassesItemHandler2 = _interopRequireDefault(_backstagePassesItemHandler);

var _legendaryItemHandler = require('./legendaryItemHandler');

var _legendaryItemHandler2 = _interopRequireDefault(_legendaryItemHandler);

var _normalItemHandler = require('./normalItemHandler');

var _normalItemHandler2 = _interopRequireDefault(_normalItemHandler);

var _conjuredItemHandler = require('./conjuredItemHandler');

var _conjuredItemHandler2 = _interopRequireDefault(_conjuredItemHandler);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getHandler(item) {
    switch (item.name) {
        case 'Aged Brie':
            return _agedBrieItemHandler2.default;
        case 'Backstage passes to a TAFKAL80ETC concert':
            return _backstagePassesItemHandler2.default;
        case 'Sulfuras, Hand of Ragnaros':
            return _legendaryItemHandler2.default;
        case 'Conjured':
            return _conjuredItemHandler2.default;
        default:
            return _normalItemHandler2.default;
    }
}
//# sourceMappingURL=index.js.map