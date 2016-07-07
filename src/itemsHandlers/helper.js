export function increaseQuality(item) {
    if (item.quality < 50) {
        item.quality++;
    }
}

export function decreaseQuality(item) {
    if (item.quality > 0) {
        item.quality--;
    }
}
