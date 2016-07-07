import { decreaseQuality } from './helper';

export default function handleConjuredItem(item) {
    decreaseQuality(item);
    decreaseQuality(item);
    item.sellIn--;

    if (item.sellIn < 0) {
        decreaseQuality(item);
    }
}
