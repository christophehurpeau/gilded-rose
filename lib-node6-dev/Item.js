"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
class Item {

    constructor(name, sellIn, quality) {
        this.name = name;

        if (!(typeof this.name === 'string')) {
            throw new TypeError("Value of \"this.name\" violates contract.\n\nExpected:\nstring\n\nGot:\n" + _inspect(this.name));
        }

        this.sellIn = sellIn;

        if (!(typeof this.sellIn === 'number')) {
            throw new TypeError("Value of \"this.sellIn\" violates contract.\n\nExpected:\nnumber\n\nGot:\n" + _inspect(this.sellIn));
        }

        this.quality = quality;

        if (!(typeof this.quality === 'number')) {
            throw new TypeError("Value of \"this.quality\" violates contract.\n\nExpected:\nnumber\n\nGot:\n" + _inspect(this.quality));
        }
    }

    // eslint-disable-next-line camelcase
    get sell_in() {
        return this.sellIn;
    }
}
exports.default = Item;

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
//# sourceMappingURL=Item.js.map