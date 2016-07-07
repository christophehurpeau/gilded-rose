'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Item = undefined;

var _Item2 = require('./Item');

var _Item3 = _interopRequireDefault(_Item2);

var _itemsHandlers = require('./itemsHandlers');

var _itemsHandlers2 = _interopRequireDefault(_itemsHandlers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Item = _Item3.default;
class Items {

    constructor(items) {
        this.items = items;
    }

    updateQuality() {
        for (const item of this.items) {
            const handle = (0, _itemsHandlers2.default)(item);
            handle(item);
        }
    }
}
exports.default = Items;
//# sourceMappingURL=index.js.map