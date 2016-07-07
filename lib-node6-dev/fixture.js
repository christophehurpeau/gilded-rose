'use strict';

var _ = require('./');

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const items = new _2.default([new _.Item('+5 Dexterity Vest', 10, 20), new _.Item('Aged Brie', 2, 0), new _.Item('Elixir of the Mongoose', 5, 7), new _.Item('Sulfuras, Hand of Ragnaros', 0, 80), new _.Item('Sulfuras, Hand of Ragnaros', -1, 80), new _.Item('Backstage passes to a TAFKAL80ETC concert', 15, 20), new _.Item('Backstage passes to a TAFKAL80ETC concert', 10, 49), new _.Item('Backstage passes to a TAFKAL80ETC concert', 5, 49),
// this conjured item does not work properly yet
new _.Item('Conjured Mana Cake', 3, 6)]);

const days = 2;

for (let i = 0; i < days; i++) {
    showHeaderFor(i);
    showItemsFor(i);
    items.updateQuality();
}

function showHeaderFor(day) {
    console.log(`-------- day ${ day } --------`);
}

function showItemsFor(day) {
    console.log('name, sellIn, quality');
    _items$items = items.items;

    if (!(_items$items && (typeof _items$items[Symbol.iterator] === 'function' || Array.isArray(_items$items)))) {
        throw new TypeError('Expected _items$items to be iterable, got ' + _inspect(_items$items));
    }

    for (const item of _items$items) {
        var _items$items;

        console.log(`${ item.name }, ${ item.sell_in }, ${ item.quality }`);
    }
    console.log();
}

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
//# sourceMappingURL=fixture.js.map