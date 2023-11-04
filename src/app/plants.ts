export class plants {
    id: null;
    name: string;
    country: string;
    description: string;
    image: string;

    constructor(id: null, name: string, country: string, description: string, image: string) {
        this.id = id;
        this.name = name;
        this.country = country;
        this.description = description;
        this.image = image;
    }
}