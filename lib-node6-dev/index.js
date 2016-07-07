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

        if (!Array.isArray(this.items)) {
            throw new TypeError('Value of "this.items" violates contract.\n\nExpected:\nArray\n\nGot:\n' + _inspect(this.items));
        }
    }

    updateQuality() {
        _items = this.items;

        if (!(_items && (typeof _items[Symbol.iterator] === 'function' || Array.isArray(_items)))) {
            throw new TypeError('Expected _items to be iterable, got ' + _inspect(_items));
        }

        for (const item of _items) {
            var _items;

            const handle = (0, _itemsHandlers2.default)(item);
            handle(item);
        }
    }
}
exports.default = Items;

function _inspect(input, depth) {
    const maxDepth = 4;
    const maxKeys = 15;

    if (depth === undefined) {
        depth = 0;
    }

    depth += 1;

    if (input === null) {
        return 'null';
    } else if (input === undefined) {
        return 'void';
    } else if (typeof input === 'string' || typeof input === 'number' || typeof input === 'boolean') {
        return typeof input;
    } else if (Array.isArray(input)) {
        if (input.length > 0) {
            if (depth > maxDepth) return '[...]';

            const first = _inspect(input[0], depth);

            if (input.every(item => _inspect(item, depth) === first)) {
                return first.trim() + '[]';
            } else {
                return '[' + input.slice(0, maxKeys).map(item => _inspect(item, depth)).join(', ') + (input.length >= maxKeys ? ', ...' : '') + ']';
            }
        } else {
            return 'Array';
        }
    } else {
        const keys = Object.keys(input);

        if (!keys.length) {
            if (input.constructor && input.constructor.name && input.constructor.name !== 'Object') {
                return input.constructor.name;
            } else {
                return 'Object';
            }
        }

        if (depth > maxDepth) return '{...}';
        const indent = '  '.repeat(depth - 1);
        let entries = keys.slice(0, maxKeys).map(key => {
            return (/^([A-Z_$][A-Z0-9_$]*)$/i.test(key) ? key : JSON.stringify(key)) + ': ' + _inspect(input[key], depth) + ';';
        }).join('\n  ' + indent);

        if (keys.length >= maxKeys) {
            entries += '\n  ' + indent + '...';
        }

        if (input.constructor && input.constructor.name && input.constructor.name !== 'Object') {
            return input.constructor.name + ' {\n  ' + indent + entries + '\n' + indent + '}';
        } else {
            return '{\n  ' + indent + entries + '\n' + indent + '}';
        }
    }
}
//# sourceMappingURL=index.js.map