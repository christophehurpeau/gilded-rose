import { decreaseQuality } from './helper';
export default function handleNormalItem(item) {
    decreaseQuality(item);
    item.sellIn--;

    if (item.sellIn < 0) {
        decreaseQuality(item);
    }
}
