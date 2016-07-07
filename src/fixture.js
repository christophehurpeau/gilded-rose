import Items, { Item } from './';

const items = new Items([
    new Item('+5 Dexterity Vest', 10, 20),
    new Item('Aged Brie', 2, 0),
    new Item('Elixir of the Mongoose', 5, 7),
    new Item('Sulfuras, Hand of Ragnaros', 0, 80),
    new Item('Sulfuras, Hand of Ragnaros', -1, 80),
    new Item('Backstage passes to a TAFKAL80ETC concert', 15, 20),
    new Item('Backstage passes to a TAFKAL80ETC concert', 10, 49),
    new Item('Backstage passes to a TAFKAL80ETC concert', 5, 49),
// this conjured item does not work properly yet
    new Item('Conjured Mana Cake', 3, 6),
]);

const days = 2;

for (let i = 0; i < days; i++) {
    showHeaderFor(i);
    showItemsFor(i);
    items.updateQuality();
}

function showHeaderFor(day) {
    console.log(`-------- day ${day} --------`);
}

function showItemsFor(day) {
    console.log('name, sellIn, quality');
    for (const item of items.items) {
        console.log(`${item.name}, ${item.sell_in}, ${item.quality}`);
    }
    console.log();
}
