export class RealEstateAd {
    id: string;
    title: string;
    description: string;
    price: number;
    surface: number;

    constructor(id: string, title: string, description: string, price: number, surface: number) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.price = price;
        this.surface = surface;
    }
}