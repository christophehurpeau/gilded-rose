/* global test, suite */
import { strictEqual } from 'assert';
import Items, { Item } from '../../lib-node6';

const AGED_BRIE = 'Aged Brie';
const SULFURAS = 'Sulfuras, Hand of Ragnaros';
const BACKSTAGE_PASSES = 'Backstage passes to a TAFKAL80ETC concert';
const CONJURED = 'Conjured';

function testUpdateQualityItem(name:string, sellIn:number, quality:number) {
    const item = new Item(name, sellIn, quality);
    const items = new Items([item]);
    items.updateQuality();
    return item;
}

suite('Normal products', () => {
    test('sellIn lowers', () => {
        const item = testUpdateQualityItem('item test', 3, 3);
        strictEqual(item.sellIn, 2);
    });

    test('quality lowers', () => {
        const item = testUpdateQualityItem('item test', 3, 3);
        strictEqual(item.quality, 2);
    });

    test('Once the sell by date has passed, Quality degrades twice as fast', () => {
        const item = testUpdateQualityItem('item test', -1, 3);
        strictEqual(item.quality, 1);
    });

    test('Quality should decrease by 2 when sellIn == 0', () => {
        const item = testUpdateQualityItem('item test', 0, 3);
        strictEqual(item.quality, 1);
    });

    test('Quality cannot decrease if <= 0 when sellIn < 0', () => {
        const item = testUpdateQualityItem('item test', -1, 0);
        strictEqual(item.quality, 0);
    });


    test('The Quality of an item is never negative', () => {
        const item = testUpdateQualityItem('item test', 3, 0);
        strictEqual(item.quality, 0);
    });
});


suite('Aged Brie', () => {
    test('sellIn lowers', () => {
        const item = testUpdateQualityItem('item test', 3, 3);
        strictEqual(item.sellIn, 2);
    });

    test('Quality should increases', () => {
        const item = testUpdateQualityItem(AGED_BRIE, 3, 10);
        strictEqual(item.quality, 11);
    });

    test('Quality should increases by 2, even if sellIn = 0', () => {
        const item = testUpdateQualityItem(AGED_BRIE, 0, 10);
        strictEqual(item.quality, 12);
    });

    test('Quality should not increases more than 50', () => {
        const item = testUpdateQualityItem(AGED_BRIE, 3, 50);
        strictEqual(item.quality, 50);
    });

    test('Quality should increases by 1 when saleIn < 0 and quality > 50', () => {
        const item = testUpdateQualityItem(AGED_BRIE, -1, 49);
        strictEqual(item.quality, 50);
    });
});

suite('Sulfuras', () => {
    test('sellIn lowers', () => {
        const item = testUpdateQualityItem('item test', 3, 3);
        strictEqual(item.sellIn, 2);
    });

    test('Quality should not change even when saleIn > 0', () => {
        const item = testUpdateQualityItem(SULFURAS, 1, 1);
        strictEqual(item.sellIn, 1);
        strictEqual(item.quality, 1);
    });

    test('Quality should not change even when saleIn < 0', () => {
        const item = testUpdateQualityItem(SULFURAS, -1, 10);
        strictEqual(item.quality, 10);
    });
});

suite('Backstage passes', () => {
    test('sellIn lowers', () => {
        const item = testUpdateQualityItem('item test', 3, 3);
        strictEqual(item.sellIn, 2);
    });

    test('Quality should increases by 1 when there are 11 days or more', () => {
        const item = testUpdateQualityItem(BACKSTAGE_PASSES, 12, 5);
        strictEqual(item.quality, 6);
    });

    test('Quality increases by 2 when there are 10 days or less ', () => {
        const item = testUpdateQualityItem(BACKSTAGE_PASSES, 10, 5);
        strictEqual(item.quality, 5 + 2);
    });

    test('Quality increases by 2 when there are 10 days or less but cannot increase more than 50', () => {
        const item = testUpdateQualityItem(BACKSTAGE_PASSES, 10, 49);
        strictEqual(item.quality, 50);
    });

    test('Quality increases by 3 when there are 5 days or less', () => {
        const item = testUpdateQualityItem(BACKSTAGE_PASSES, 5, 5);
        strictEqual(item.quality, 5 + 3);
    });

    test('Quality increases by 3 when there are 10 days or less but cannot increase more than 50', () => {
        const item = testUpdateQualityItem(BACKSTAGE_PASSES, 5, 49);
        strictEqual(item.quality, 50);
    });

    test('Quality drops to 0 after the concert', () => {
        const item = testUpdateQualityItem(BACKSTAGE_PASSES, 0, 5);
        strictEqual(item.quality, 0);
    });

    test('Quality should not change even when quality > 50', () => {
        const item = testUpdateQualityItem(BACKSTAGE_PASSES, 1, 50);
        strictEqual(item.sellIn, 0);
        strictEqual(item.quality, 50);
    });
});


suite('Conjured products', () => {
    test('sellIn lowers', () => {
        const item = testUpdateQualityItem(CONJURED, 3, 3);
        strictEqual(item.sellIn, 2);
    });

    test('quality lowers twice as fast', () => {
        const item = testUpdateQualityItem(CONJURED, 3, 3);
        strictEqual(item.quality, 1);
    });

    test('Once the sell by date has passed, Quality still degrades twice as fast', () => {
        const item = testUpdateQualityItem(CONJURED, -1, 6);
        strictEqual(item.quality, 3);
    });

    test('Quality cannot decrease if <= 0 when sellIn < 0', () => {
        const item = testUpdateQualityItem(CONJURED, -1, 0);
        strictEqual(item.quality, 0);
    });

    test('The Quality of an item is never negative', () => {
        const item = testUpdateQualityItem(CONJURED, 3, 0);
        strictEqual(item.quality, 0);
    });
});
