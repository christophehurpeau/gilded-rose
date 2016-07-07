import { increaseQuality } from './helper';

export default function handleAgedBrieItem(item) {
    increaseQuality(item);
    item.sellIn--;
    if (item.sellIn < 0) {
        increaseQuality(item);
    }
}
