import { increaseQuality } from './helper';

export default function handleBackstagePassesItem(item) {
    if (item.quality < 50) {
        item.quality++;
        if (item.sellIn < 11) {
            increaseQuality(item);
        }
        if (item.sellIn < 6) {
            increaseQuality(item);
        }
    }
    item.sellIn--;
    if (item.sellIn < 0) {
        item.quality -= item.quality;
    }
}
