export Item from './Item';
import getHandler from './itemsHandlers';

export default class Items {
    items: Array;

    constructor(items) {
        this.items = items;
    }

    updateQuality() {
        for (const item of this.items) {
            const handle = getHandler(item);
            handle(item);
        }
    }
}
