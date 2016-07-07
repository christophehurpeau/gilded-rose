'use strict';

var _ = require('./');

const items = [];
items.push(new _.Item('+5 Dexterity Vest', 10, 20));
items.push(new _.Item('Aged Brie', 2, 0));
items.push(new _.Item('Elixir of the Mongoose', 5, 7));
items.push(new _.Item('Sulfuras, Hand of Ragnaros', 0, 80));
items.push(new _.Item('Sulfuras, Hand of Ragnaros', -1, 80));
items.push(new _.Item('Backstage passes to a TAFKAL80ETC concert', 15, 20));
items.push(new _.Item('Backstage passes to a TAFKAL80ETC concert', 10, 49));
items.push(new _.Item('Backstage passes to a TAFKAL80ETC concert', 5, 49));
// this conjured item does not work properly yet
items.push(new _.Item('Conjured Mana Cake', 3, 6));

var days = 2;

for (var i = 0; i < days; i++) {
    showHeaderFor(i);
    showItemsFor(i);
    (0, _.update_quality)();
}

function showHeaderFor(day) {
    console.log('-------- day ' + day + ' --------');
}

function showItemsFor(day) {
    console.log('name, sellIn, quality');
    for (var j = 0; j < items.length; j++) {
        var item = items[j];
        console.log(item.name + ', ' + item.sell_in + ', ' + item.quality);
    }
    console.log();
}
//# sourceMappingURL=fixture.js.map