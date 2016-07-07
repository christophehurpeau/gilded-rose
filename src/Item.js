export default class Item {
    name: string;
    sellIn: number;
    quality: number;

    constructor(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }

    // eslint-disable-next-line camelcase
    get sell_in() {
        return this.sellIn;
    }
}
