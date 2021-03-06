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
    for (const item of items.items) {
        console.log(`${ item.name }, ${ item.sell_in }, ${ item.quality }`);
    }
    console.log();
}
//# sourceMappingURL=fixture.js.map