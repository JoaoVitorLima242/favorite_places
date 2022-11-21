import { TLocation } from './index.d'

export default class Place {
    readonly id: number;
    title: string
    imageUri: string
    address: string
    location: TLocation;

    constructor(title: string, imageUri: string, address: string, location: TLocation, id: number) {
        this.id = id
        this.title = title;
        this.imageUri = imageUri;
        this.address = address;
        this.location = location;
    }
}