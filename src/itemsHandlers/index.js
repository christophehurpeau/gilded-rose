import agedBrieItemHandler from './agedBrieItemHandler';
import backstagePassesItemHandler from './backstagePassesItemHandler';
import legendaryItemHandler from './legendaryItemHandler';
import normalItemHandler from './normalItemHandler';

export default function (item) {
    switch (item.name) {
        case 'Aged Brie':
            return agedBrieItemHandler;
        case 'Backstage passes to a TAFKAL80ETC concert':
            return backstagePassesItemHandler;
        case 'Sulfuras, Hand of Ragnaros':
            return legendaryItemHandler;
        default:
            return normalItemHandler;
    }
}
