export class RealEstateAd {
    title: string;
    description: string;
    price: number;
    surface: number;

    constructor(title: string, description: string, price: number, surface: number) {
        this.title = title;
        this.description = description;
        this.price = price;
        this.surface = surface;
    }
}